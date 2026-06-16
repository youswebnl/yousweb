import { Resend } from "resend";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioWhatsappFrom = process.env.TWILIO_WHATSAPP_FROM;
    const twilioWhatsappTo = process.env.TWILIO_WHATSAPP_TO;

    if (
      !resendApiKey ||
      !twilioAccountSid ||
      !twilioAuthToken ||
      !twilioWhatsappFrom ||
      !twilioWhatsappTo
    ) {
      return Response.json(
        { error: "Missing environment variables" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

    const body = await request.json();

    const {
      naam,
      bedrijf,
      email,
      telefoon,
      wensen,
      pakket,
      paginas,
      extras,
      eenmaligePrijsindicatie,
      maandelijkseOpties,
    } = body;

    const extrasText =
      Array.isArray(extras) && extras.length
        ? extras
            .map((extra) => {
              const priceText =
                extra.billing === "monthly"
                  ? `€${extra.price} p/m`
                  : `€${extra.price}`;

              return `${extra.name} (${priceText})`;
            })
            .join(", ")
        : "Geen extra opties";

    const monthlyText =
      maandelijkseOpties && maandelijkseOpties > 0
        ? `\nMaandelijkse opties: €${maandelijkseOpties} p/m`
        : "";

    const whatsappMessage = `
🔥 Nieuwe website aanvraag

Naam: ${naam}
Bedrijf: ${bedrijf}
E-mail: ${email}
Telefoon: ${telefoon}

Pakket: ${pakket}
Pagina's: ${paginas}
Extra opties: ${extrasText}
Prijsindicatie: €${eenmaligePrijsindicatie}${monthlyText}

Extra wensen:
${wensen || "Geen extra wensen ingevuld"}
`;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["youssef_achkaoukaou@hotmail.nl"],
      subject: `Nieuwe website aanvraag van ${naam}`,
      html: `
        <h2>Nieuwe website aanvraag</h2>

        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Bedrijf:</strong> ${bedrijf}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${telefoon}</p>

        <hr />

        <p><strong>Pakket:</strong> ${pakket}</p>
        <p><strong>Pagina's:</strong> ${paginas}</p>
        <p><strong>Extra opties:</strong> ${extrasText}</p>
      <p><strong>Prijsindicatie:</strong> €${eenmaligePrijsindicatie}</p>
<p><strong>Maandelijkse opties:</strong> ${
        maandelijkseOpties && maandelijkseOpties > 0
          ? `€${maandelijkseOpties} p/m`
          : "Geen maandelijkse opties"
      }</p>

        <hr />

        <p><strong>Extra wensen:</strong></p>
        <p>${wensen || "Geen extra wensen ingevuld"}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    await twilioClient.messages.create({
      from: twilioWhatsappFrom,
      to: twilioWhatsappTo,
      body: whatsappMessage,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

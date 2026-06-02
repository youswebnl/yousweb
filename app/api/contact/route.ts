import { Resend } from "resend";
import twilio from "twilio";


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
  throw new Error("Missing environment variables");
}

const resend = new Resend(resendApiKey);

const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

export async function POST(request: Request) {
  try {
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
      prijs,
    } = body;

    const extrasText = extras.length ? extras.join(", ") : "Geen extra opties";

    const whatsappMessage = `
🔥 Nieuwe website aanvraag

Naam: ${naam}
Bedrijf: ${bedrijf}
E-mail: ${email}
Telefoon: ${telefoon}

Pakket: ${pakket}
Pagina's: ${paginas}
Extra opties: ${extrasText}
Prijsindicatie: €${prijs}

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
        <p><strong>Prijsindicatie:</strong> €${prijs}</p>

        <hr />

        <p><strong>Extra wensen:</strong></p>
        <p>${wensen || "Geen extra wensen ingevuld"}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

await twilioClient.messages.create({
  from: twilioWhatsappFrom as string,
  to: twilioWhatsappTo as string,
  body: whatsappMessage,
});

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6264205afd85ca",
      pass: "6e65c0320964d4",
    },
  });

  //INFORMACION EMAIL
  const info = await transport.sendMail({
    from: '"Tienda Pied-Piper - Administracion" <cuentas@pied-piper.com>',
    to: email,
    subject: "Tienda Pied-Piper - Coprueba tu cuenta",
    text: "Comprueba tu cuenta en Tienda Pied-Piper",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en Tienda Pied-Piper.</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    </p>

    <p>Si tu no creaste esta cuenta, puedes ignorar el correo</p>
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6264205afd85ca",
      pass: "6e65c0320964d4",
    },
  });

  //INFORMACION EMAIL
  const info = await transport.sendMail({
    from: '"Tienda Pied-Piper - Administracion" <cuentas@pied-piper.com>',
    to: email,
    subject: "Tienda Pied-Piper - Reestablece tu Contraseña",
    text: "Reestablece tu Contraseña para Tienda Pied-Piper",
    html: `<p>Hola: ${nombre} has solicitado Reestablecer tu Contraseña.</p>
    <p>Sigue el siguiente enlace para generar una nueva contraseña: 
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablece Contraseña</a>
    </p>

    <p>Si tu no solicitaste este correo, puedes ignorar el correo</p>
    `,
  });
};
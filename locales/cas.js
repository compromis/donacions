export default {
  app: {
    hero: "Colabora",
    title: "Donaciones",
  },
  index: {
    title: "¿Cuánto quieres aportar hoy?",
    donate_5: "Imprimen 30 carteles",
    donate_10: "Nos hace llegar a 10.000 personas en redes",
    donate_30: "Montan un estand informativo",
    donate_50: "Llenan un barrio de carteles",
    donate_100: "Todo el material para una manifestación",
    donate_other: "Otra cantidad",
    continue: "Continúa",
  },
  form: {
    contribution: "Contribución",
    amount: "Cantidad",
    edit: "Editar cantidad",
    fund: "Fondo",
    personal_data: "Datos personales",
    first_name: "Nombre",
    last_name: "Apellidos",
    email: "E-mail",
    ID: "DNI/NIE",
    address: "Dirección",
    postal_code: "Código postal",
    municipality: "Municipio",
    payment: "Pago",
    wire: "Transferencia bancaria",
    button_paypal: "Pagar con PayPal",
    button_wire: "Siguiente paso",
    loading: "Cargando...",
    accept: "He leído y acepto la información de protección de datos.",
    paypal: "PayPal",
    disclaimer: `Compromís en cumplimiento de lo establecido en la <strong>Ley Orgánica 3/2018 del 5 de diciembre</strong>, de <strong>Protección de Datos Personales y Derechos Digitales</strong>,
      le informamos que los datos personales que nos va a proporcionar serán incorporados a un fichero automatizado de <strong>Compromís</strong>,
      que como responsable del fichero, tratará los mismos con el fin de tramitar su donación. Los datos no serán proporcionados a terceros salvo que exista una obligación legal.
      Asimismo, le informamos que podrá ejercer los derechos que le asisten de acceso, rectificación, cancelación y oposición al tratamiento de la información que
      le concierne a través de correo postal a Compromís (Plaça del Pilar, 1 - 46001 València)
      o bien por medio de un correo electrónico a <a href="mailto:dades@compromis.net" class="link-white link-underlined">dades@compromis.net</a>, acompañando una fotocopia del documento que acredite su identidad.
      Más información en <a href="https://compromis.net/avis-legal/" class="link-white link-underlined">Aviso legal y política de privacidad</a>.`,
  },
  receipt: {
    thanks_with_name: "¡Gracias, ",
    thanks_alone: "¡Gracias!",
    thanks_paypal:
      "¡Hemos recibido tu donación, muchas gracias por tu compromiso!",
    thanks_wire:
      "Para completar tu donación, solo queda que hagas una transferencia al siguiente número de cuenta. ¡Gracias por tu compromiso!",
    subject: "Concepto",
    back: "Volver a compromis.net",
    amount: "Cantidad",
    bank: "Banco",
    wire_header: "Transferencia bancaria",
    account: "Beneficiario",
  },
  errors: {
    integer: "La cantidad debe ser un número entero",
    max: "La cantidad máxima para donaciones es {amountMax} €",
    min: "La donación mínima es {amountMin} €",
    accept:
      "Has leído y aceptado la información de protección de datos antes de continuar",
  },
  paypal: {
    redirect: "Redirigiendo a PayPal...",
    text: "Si no te redirige automáticamente, haz clic en el siguiente botón:",
  },
};

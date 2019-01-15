const sendEmail = require('./sendEmail.utils');
const { decryptBooking } = require('../bookings/bookings.utils');

const sendEmailForBooking = async snapshot => {
  if (snapshot.before.exists()) {
    return;
  }

  const encryptedBooking = snapshot.after.val();

  const booking = decryptBooking(encryptedBooking);

  if (!booking.email) {
    throw new Error('Property Email is weirdly missing...');
  }

  const bookingDate = new Date(booking.date);
  const dateString = `${bookingDate.getDate()} / ${bookingDate.getMonth()}`;
  const body = {
    ...booking,
    dateString,
    from: '1mumbaicafe@gmail.com',
    object: `Votre Réservation du ${dateString}`,
    to: booking.email,
    content: `
      <div>
        <h1>Bonjour ${booking.firstname} et merci d'avoir choisi le Mumbai café</h1>
        <p>Vous avez réservé une table de ${booking.persons} pour le ${dateString}.</p>
        <p>N'hésitez pas à nous contacter par email ou téléphone si vous avez des questions ou demandes particulières.</p>
        <hr/>
        <h4>Vous souhaitez annuler ?</h4>
        <p>Il vous suffit de vous munir de votre identifiant de réservation <b>${booking.id}</b>
        et de vous rendre <a href='https://mumbai-redux.firebaseapp.com/book'>sur notre site</a>.
        Ensuite, cliquez sur le bouton "Annuler ma réservation", renseignez l'identifiant puis confirmez.
        </p>

        <h2>L'équipe du Mumbai</h2>
      </div>
    `,
  };

  await sendEmail(body);

  return;
};

module.exports = sendEmailForBooking;

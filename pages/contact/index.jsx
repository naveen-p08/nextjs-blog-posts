import Head from 'next/head'

import ContactForm from "../../components/contact/ContactForm";

function ContactPage() {
  return (
    <>
        <Head>
          <title>Contact Me</title>
          <meta name={'description'} content={'contact me with the form'}/>
        </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
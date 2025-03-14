import { useRouter } from 'next/router';

interface ContactPageProps {
    params: {
        name: string;
    };
}

const ContactPage = ({ params }: ContactPageProps) => {
    const { name } = params;

    return (
        <div>
            <h1>Contact {name}</h1>
            <p>This is the contact page for {name}.</p>
        </div>
    );
};

// 

export default ContactPage;
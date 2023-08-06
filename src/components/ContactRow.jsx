

export default function ContactRaw ({ contact }) {
 return (
    <tr className="contacts"
    key={contact.id}
    onclick={()=> onselect(contact.id)}
    >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
 );
}
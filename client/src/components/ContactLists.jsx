import axios from "axios";
import { useEffect } from "react";


const ContactLists = ({contacts, setContacts}) => {
    useEffect(() => {
      async function fetchContacts() {
        try {
          const res = await axios.get('https://sheetdb.io/api/v1/dswjg6abk4yx7');
          console.log(res)
          setContacts(res.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts();
    }, [setContacts]);
  
    return (
      <div className="bg-black">
        <div className="relative pb-16 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500" >
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white rounded-t-lg">
              User Contacts
              <p className="mt-1 text-sm font-normal text-gray-500">
                This table shows a list of users who have contacted us. The information is saved in an Excel sheet.
              </p>
            </caption>
  
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.length < 1 ? (
                <tr>
                  <td className="px-6 py-4" colSpan="4">No one has contacted you yet.</td>
                </tr>
              ) : (
                contacts.map((contact, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{contact.Name}</td>
                    <td className="px-6 py-4">{contact.Email}</td>
                    <td className="px-6 py-4">{contact.Phone}</td>
                    <td className="px-6 py-4">{contact.Message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ContactLists;
  
import React from "react";
import ContactList from "../../components/admin/contacts/ContactList";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ContactsPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <ContactList />
      </CardContent>
    </Card>
  );
};

export default ContactsPage;
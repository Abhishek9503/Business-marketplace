import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SubscriptionsPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <SubscriptionList/>
      </CardContent>
    </Card>
  );
};


export default SubscriptionsPage;
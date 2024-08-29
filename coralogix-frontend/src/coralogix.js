import { CoralogixRum } from '@coralogix/browser';

CoralogixRum.init({
  public_key: '<Your send your data key>',
  application: 'react-app',
  version: '1.0.0',
  coralogixDomain: 'EU2'
});

// Set User Context
CoralogixRum.setUserContext({
  user_id: '123',
  user_name: 'Aharon',
  user_email: 'aharon@example.com',
  user_metadata: {
    role: 'admin',
  }
});

// Set Labels
CoralogixRum.setLabels({
  paymentMethod: 'visa',
  userTheme: 'black'
});

// Log example
CoralogixRum.error('This is a log with error severity using the error method', { key: 'value' });

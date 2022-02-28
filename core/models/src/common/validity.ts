import type Severity from '@gulab-client/models/statuses/Severity';

export type Validity = {
  valid: boolean;
  severity: Severity;
  message?: string;
};

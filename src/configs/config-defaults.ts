import {
  isDevEnv,
  isProdEnv,
  isSandboxEnv,
  isStagingEnv,
} from '@/configs/env.config';

export const bscApiUrlDefaults = () => {
  if (isProdEnv()) {
    return 'https://api.bscscan.com';
  } else {
    // Testnet
    return 'https://api-testnet.bscscan.com';
  }
};

export const authRbacDomainDefaults = () => {
  if (isProdEnv()) {
    return 'rbac-production';
  } else if (isSandboxEnv()) {
    return 'rbac-sandbox';
  } else if (isStagingEnv()) {
    return 'rbac-staging';
  } else if (isDevEnv()) {
    return 'rbac-dev';
  } else {
    // Local env
    return 'rbac-local';
  }
};

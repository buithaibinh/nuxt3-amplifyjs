import { Amplify } from '@aws-amplify/core';

const awsConfig = {
  Auth: {
    region: 'ap-southeast-1',
    userPoolId: 'ap-southeast-x_XXXXXX',
    userPoolWebClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    identityPoolId: 'ap-southeast-1:x-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  // https://aws.amazon.com/blogs/mobile/ssr-support-for-aws-amplify-javascript-libraries/
  Amplify.configure({ ...awsConfig, ssr: true });
});

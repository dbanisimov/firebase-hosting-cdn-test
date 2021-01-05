# Firebase Hosting CDN caching test

Deploy functions: 

```firebase deploy --only functions```

Deploy to the regular hosting:

```firebase deploy --only hosting```

Deploy to a preview channel:

```firebase hosting:channel:deploy preview --no-authorized-domains```
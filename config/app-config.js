module.exports = {
  appPort: process.env.PORT,
  appHost: process.env.APP_HOST,
  databaseUrl: process.env.DATABASE_URL,
  databaseAuth: process.env.DATABASE_AUTH
    ? JSON.parse(Buffer.from(process.env.DATABASE_AUTH, 'base64').toString('utf8'))
    : null,
  tokenPrivateSecreteKey: process.env.TOKEN_PRIVATE_SECRETE_KEY
    ? Buffer.from(process.env.TOKEN_PRIVATE_SECRETE_KEY, 'base64').toString('utf8')
    // eslint-disable-next-line max-len
    : Buffer.from('LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRW93SUJBQUtDQVFFQXB2dkczZUJGYSs2UnlxOEhLNklTNWJZbTNIUnZJQ1hYRjBYZVIyYmpqdHFRQzA5NA0KRXpLVUVDTld5dHdIeTNHRVhtS3dnYnFiVFNDZXFtY3NTTWVmU0FRUUVtOFpWU2gyY05yTWd2ZTJQdjBaa1lSNQ0Kem1PUjBhZmg1eHJwYlNkbFQ5ZXF4dndGdlFVV25namNoU05MWE5vWUNZRkJKZnZtRi8xUEdsSGNqSVMxNWZ3Tg0KVC9CTWdFUVpnYVBpdFZBMjVtZUh6NmxsbHpIbjhlbVkwc3lMZ2N4OHBhOWlQS1IrQ05JbTlvaVFnaXNnRFN3MQ0KeTRRa1MrME1UZHkzUkVUVit1WFZVd1NNTW9sVkhYWDNTOTR0QW9Ya1cwaXIrakpvdHBwY0h1SUd5TWY3SWJ3Zw0Kb2ZzOENhRVY2UW94dzhzNmVmenArWmVIMzNxeU9nZjc4QU1EZVFJREFRQUJBb0lCQUg5WHhTb1J6WDlwR1ovag0KYU9sNm1VUzdhOWwxcGdWek5od1dlVlFrZitmQ2dGVlB6bmQ5ZS9MdXNGTFdCOCs3aTBIYnExWFR0SG5XSllvNA0KVWtwU2lnTUdyaWNRdU5YN25JK21ISTdJVUNDckxpT09Uc0g1cHd1bkp4enlwZzlMR3ZVUHVMbzFHajh6TVRObA0KK0o1RDgwWWxRRzJITitLNnZwZU80eE5rV0hpRHdIK1NtRzBhWjc1K2ZpTmd0M1I0bDdFWTZFanlQSDFibVlmag0KcFBDRS82TFBYbk10c1VJU3AybUFwRDhyQjhaZHk4VkpQbUphbjd1UlpaeTgrSUo4TTkyNkJ0VG1YcXc5RkhPNQ0KMlJRQkhtZkVNcS96NVdpZmZZVlZ2dXY4MVQ5Zm5UMElSOVpMRHlLak9DdmRDY1BmR1lqS1gxVUFRNnM2YlVtVA0KU3IzSytURUNnWUVBOWdLeVJ2S0dVajZRKzlTZkJPOWdOd2xGditLbkd3Tk8xTFRnS3RQc2xsS2ptS1djUjVaSg0KaklubW9GdUVKRWpvVWJPMEpUWEJmL3NvT0I5NHFHNG1Tbi9NbkVma0hwRENnN2psQU1LZ1V6WmJEUDdEL2t1bA0KcXpuRnVKSHhVSzNNTWZlYWpEZVU5QkEyM2VSMFNrYllNaEpxa3UzclgwTm96UTV2R0JIKzZKVUNnWUVBcmNPVw0KTW9hYUlHYmRZc09id3JlUE0wR0VseVg0UCtwYWhPZ2RwSDZVcEE0eGk3VDdzRUpDTkx2RUNsa21iZE1ySHRxYQ0KZmhGamRpdEhkK2VyNDhXckh0aHpSY01ic3BQK2d6N0RaRURhdHUwdjBBS2xxeHBNdzRjTVJqeVBRdDhPR1hkaQ0KeTYrUjBUYXdmRWZJTUxoT054MHhnQUFhaHY0MXQ0V01xc0tNSWxVQ2dZRUFvZVpnWVNTV2xXV3JrSy82L3dweQ0KTFlZaXF3ZUVwZGhsZHNLYWpGVHY3SFh5U0RFbFNrOXprOVBsUFQ4OUZZd05xRWMxbFE5dGlzWkZUN29XYy9JWg0KclFteUpGK0RsMEg1WVNxN091YmJFQ2hEZjZmaVlHWjBYdDBrYkRWUHRLTE1NVTRjSFk4dXJmaEZ3MzNuc2tJeA0KWWJLUkJLVWpNNHh2V2hQWHRPV1M5b2tDZ1lCSGlYODdlK2pXTUNNeXR2OVlVY1BWd1VKNkM3ckJiWlVvcEhzWA0KcnJrNU5WSzJocU1iOUp0WEpIcFlIRTNTNXg0WWpMMFA2ODY3NXFOOHZOY3FaY1hHWkN4STYwTnE2THplZ2FkbA0KamNHOWo3YWdkNGFIQThQWXQ2K1k5dk92L3k3SjB6bk1TNUxIeERFeWFVY0VyOHdicXB3bmEyT0FjZ1hoY1V6eA0KUERqL0pRS0JnQ2JmUGhGSnQrb1J0aXRTSjhLS0lFdCt6Mm1kSVNSQzNHcTB0bDlLVmthOVhERkFER0FtVUg4YQ0KT1cwSlM4V1RaR2RqaTlySzVacmlMUmowZ2NweTBIa2RNL25nYmVBOEFGZ0MxZE5CZVZwYmh5dzVzWC83VVFsdQ0KNm1DNjhmSzhrSjZEa2JnMHhUUW9JenNyVDB3ZVR2dlRJekxIczRkN1ZDTlkxeUlUMWUrSQ0KLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS0=', 'base64').toString('utf8'),
  tokenPublicSecreteKey: process.env.TOKEN_PUBLIC_SECRETE_KEY
    ? Buffer.from(process.env.TOKEN_PUBLIC_SECRETE_KEY, 'base64').toString('utf8')
    // eslint-disable-next-line max-len
    : Buffer.from('LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0NCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBcHZ2RzNlQkZhKzZSeXE4SEs2SVMNCjViWW0zSFJ2SUNYWEYwWGVSMmJqanRxUUMwOTRFektVRUNOV3l0d0h5M0dFWG1Ld2dicWJUU0NlcW1jc1NNZWYNClNBUVFFbThaVlNoMmNOck1ndmUyUHYwWmtZUjV6bU9SMGFmaDV4cnBiU2RsVDllcXh2d0Z2UVVXbmdqY2hTTkwNClhOb1lDWUZCSmZ2bUYvMVBHbEhjaklTMTVmd05UL0JNZ0VRWmdhUGl0VkEyNW1lSHo2bGxsekhuOGVtWTBzeUwNCmdjeDhwYTlpUEtSK0NOSW05b2lRZ2lzZ0RTdzF5NFFrUyswTVRkeTNSRVRWK3VYVlV3U01Nb2xWSFhYM1M5NHQNCkFvWGtXMGlyK2pKb3RwcGNIdUlHeU1mN0lid2dvZnM4Q2FFVjZRb3h3OHM2ZWZ6cCtaZUgzM3F5T2dmNzhBTUQNCmVRSURBUUFCDQotLS0tLUVORCBQVUJMSUMgS0VZLS0tLS0=', 'base64').toString('utf8'),
  tokenSignOptions: {
    expiresIn: process.env.TOKEN_EXPIRE_IN,
    algorithm: process.env.ALGORITHM,
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER,
    subject: process.env.SUBJECT,
  },
};

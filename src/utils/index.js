import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID = "1mKB6bzyG1pvYX-2vfMTrYVJv_SNsW7YPBQCmCk2QuJM";
const SHEET_ID = "0";
const CLIENT_EMAIL = "demo-239@xenon-machine-356012.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCbcxtTLkMWVQX3\nJQrv1L2f5no46UGKRt/t3DFiQOOE2c1Mmic8z9sdazsYTGTLfi1jUrHOQO4zVuGE\nM1jGrPQF4HU/a2aWM6kDa7mN3iiUg2nXo3YtshCQSjfZLGNB45RM1KPxlUreNPlK\n8P7vJ1f0DVwA4AlU19JQXKIsGLIWX33nx0TKPNVhpAUqpikl7gxsWyhE65K5e1YI\nwOdZ8wIQ3E3l2isJYM02yj+rpRt35BoQzeqIP13L5ATCkLooY//h3f3nwAZq9ewC\ng7JGLzKdpyFgwgz9y0vs3iD5H6D1NrfKiLYNqGb+SRsFF+hI+E9Fh21fdB/4Gsth\nl0HnM05tAgMBAAECgf8Ejdq/FRviC5uhIfSwEgt8I8Rw5mSFKI5m6YyI1F3WBot9\nMwbzQSOqOPoCPDq3u3qY7lNHN5/C4Ui6FscDCw4bHfhRY1QeEmVhNEa7YUbPEwqG\nxsMvk4foskPwmNxPkdtGZPRon3cSC3tCNs1BNGXfQITxgZ7EXY5LzGrz38VX4mid\nQRe6W/iESC3p+YK9kFCcNiCMmzMJs28u4yB5Z8ht7/R7b0Q+B3gpxfqhwZiEIHkt\nyrTtl7Noa0bm/6sGNmbE16/xcSb/eMUIVsrZiPL5TmG/rjbdftN+Np++tqIcJWF0\nibx+8ZlYO16Z6o/6GWRbLnyqOFN/TiiteU69voECgYEAym4GJPgJyTjz7UoK1gqf\niMNxVqNZCPXRoRVfuwBBLKz2HgvhJAMfRVPCUfHLE331rsSJ4ZlyKeTyZyfN6hBi\nQorSLhAcqJZLtfqbuwH8MX5CGw3452i0P+qlVZ8lDwCAp9+yGj0+7DgcXtz31KZJ\nOwVDrD9jO8cos4M9zSfpjkECgYEAxJZTqPX5EGRUETCu9m4ZbKgD2czOUaTu7Bua\n277+Y4+UzDMSq6bT57icrLHSQvJVLamdRbFiZxYNcIBI8XFqrOhRkuRKxkflWAQy\nNRbkiVrye+pB38EhlO/OZl+HQqbplP6t7/13TsvyOVGR9SWzjT3AkyoRMhtkOpWN\nKSPsDS0CgYBFgcfcU8rQbBzdomncGuOyiyFUlVwSBo4HWJZ5WFoIpA8SPBP/UI8h\nN+RmTLblJ3//lX6elxirJ/DP2MwMjbmfjZkjteaRQKIYh0eHy+Ozft3l+kM3+izC\nMai5oJ6R6yNCAT5fYh5D7/RV4lu6iapleKZG87D4KqdgFDVZR1YbwQKBgEprAcZ/\nPsaWxEAxproA2b0JKVQEtMGxZwSYOpofBhvYWaKnXtT99U/N0fmJ4yeWpun/QFsG\nmFKfxXymA3bq0VAdLewmYawHwWj9RahVPzRD6nFAL6mtabIAyah1VzXDC79sXZnw\n4H5CtDJAj7k2iW7ZRpIvJY1LUzjeLi65u30NAoGAL5U9a3nFR7NLKQ7sD9VDJAH9\nxxREJfExmJC3BxZnFNus69H4vw8H2EqDoHOiyyrbvpOzt1U+KnSP0U+lDa6RYEcC\n8nNLc8uJh45YvxF6mWfWih2zOVSl8prnsRTxUZL9IvVP3af8/74Rqs1wmPKgYdNY\npQovnaKsDjStSU8irUU=\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export async function appendSpreadsheet(row) {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};

// Example
//
//
// const newRow = { Name: "new name", Value: "new value" };
// 
// appendSpreadsheet(newRow);

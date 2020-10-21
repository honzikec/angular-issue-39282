# A minimalistic reproduction of the issue described in https://github.com/angular/angular/issues/39282

## Reproduction steps

1. Open **coreApp** folder in terminal.
2. Run `npm install`
3. Run `ng build coreLib`.
4. Open **userApp** folder in terminal.
5. Run `npm install`.
6. Run `ng build userLib`.
7. The build fails with **ERROR: Cannot resolve type entity i2.CommonModule to symbol**.

## Notes

In this case it fails on the `CommonModule`, but if you import any other Angular (or third party in general?) module, it fails with the same message.

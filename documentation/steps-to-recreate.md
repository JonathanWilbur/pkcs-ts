# Steps to Recreate

- [ ] Run the ASN.1 Compiler to generate TypeScript.
- [ ] Copy the outputs into the `./source` directory.
- [ ] Delete the `*.norm.json` files.
- [ ] Copy the `*.asn1` files to the `./documentation` directory.
- [ ] `git commit` to save the initial state of the repository.
- [ ] Format the files with `prettier`.
- [ ] Manually fix remaining syntactic and type errors in the files.
- [ ] Format the files again with `prettier`.
- [ ] `git commit` again to save the state of the repo after the manual fixes.
- [ ] Replace duplicated definitions with their canonical equivalents.
  - [ ] `AlgorithmIdentifier`
  - [ ] `SubjectPublicKeyInfo`
  - [ ] `Attribute` (but not `Attributes`)
  - [ ] `IssuerAndSerialNumber`
  - E.g. Replace all occurrence of `AlgorithmIdentifier` with the definition in
    ITU X.509 (provided that the definitions are truly fungible).

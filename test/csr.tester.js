const fs = require("fs");
const asn1 = require("asn1-ts");
const x500 = require("x500-ts");
const pkcs = require("../dist/node/index");
const AuthenticationFramework = x500.AuthenticationFramework;
const InformationFramework = x500.InformationFramework;
const csr = new pkcs.PKCS10.CertificationRequest(
    new pkcs.PKCS10.CertificationRequestInfo(
        pkcs.PKCS10.CertificationRequestInfo_version_v1,
        {
            rdnSequence: [
                [
                    new InformationFramework.AttributeTypeAndValue(
                        new asn1.ObjectIdentifier([ 2, 5, 4, 3 ]),
                        new asn1.DERElement(
                            asn1.ASN1TagClass.universal,
                            asn1.ASN1Construction.primitive,
                            asn1.ASN1UniversalType.printableString,
                            "bigboi",
                        ),
                    ),
                ],
            ],
        },
        new AuthenticationFramework.SubjectPublicKeyInfo(
            new AuthenticationFramework.AlgorithmIdentifier(
                new asn1.ObjectIdentifier([ 1, 2, 840, 113549, 1, 1, 1 ]),
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.nill,
                    null,
                ),
            ),
            asn1.unpackBits((asn1.DERElement.fromSequence([
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.integer,
                    123456789,
                ),
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.integer,
                    65537,
                ),
            ])).toBytes()),
        ),
        []
    ),
    new AuthenticationFramework.AlgorithmIdentifier(
        new asn1.ObjectIdentifier([ 1, 2, 840, 113549, 1, 1, 11 ]),
        new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.nill,
            null,
        ),
    ),
    new Uint8ClampedArray([ 1, 0, 1, 0, 1, 0, 1, 0 ]),
)
fs.writeFileSync("csr.der", pkcs.PKCS10._encode_CertificationRequest(csr).toBytes());

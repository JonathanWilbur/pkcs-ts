const fs = require("fs");
const asn1 = require("asn1-ts");
const x500 = require("x500-ts");
const pkcs = require("../dist/node/index");
// const AuthenticationFramework = x500.AuthenticationFramework;
// const InformationFramework = x500.InformationFramework;


// 0:d=0  hl=4 l=2515 cons: SEQUENCE          
// 4:d=1  hl=2 l=   1 prim: INTEGER           :03
// 7:d=1  hl=4 l=2447 cons: SEQUENCE          
// 11:d=2  hl=2 l=   9 prim: OBJECT            :pkcs7-data
// 22:d=2  hl=4 l=2432 cons: cont [ 0 ]        
// 26:d=3  hl=4 l=2428 prim: OCTET STRING      [Seems to be encrypted]
// 2458:d=1  hl=2 l=  59 cons: SEQUENCE          
// 2460:d=2  hl=2 l=  31 cons: SEQUENCE          
// 2462:d=3  hl=2 l=   7 cons: SEQUENCE          
// 2464:d=4  hl=2 l=   5 prim: OBJECT            :sha1
// 2471:d=3  hl=2 l=  20 prim: OCTET STRING      [HEX DUMP]:A5608FFDF651D132B90701AEAAF4DDD3E76E88A7
// 2493:d=2  hl=2 l=  20 prim: OCTET STRING      [HEX DUMP]:94EE6C5DA41E4B4C2BE8AC223C4E4E4E3225338E
// 2515:d=2  hl=2 l=   2 prim: INTEGER           :07D0

// id-pkcs OBJECT IDENTIFIER ::=
//     {iso member-body usa(840) rsadsi(113549) pkcs(1)}

// id-data OBJECT IDENTIFIER ::= {id-pkcs 7 1}

// const pfx = new pkcs.PKCS12.PFX(
//     pkcs.PKCS12.PFX_version_v3,
//     new pkcs.PKCS12.ContentInfo(
//         new asn1.ObjectIdentifier([ 1, 2, 840, 113549, 1, 7, 1 ]),
//         new asn1.DERElement(
//             asn1.ASN1TagClass.universal,
//             asn1.ASN1Construction.primitive,
//             asn1.ASN1UniversalType.octetString,
//             new Uint8Array([]),
//         ),
//     ),
// );

// fs.writeFileSync("pfx.der", pkcs.PKCS12._encode_PFX(pfx).toBytes());
const pfxElement = new asn1.DERElement();
pfxElement.fromBytes(fs.readFileSync("./test/shibboleth.pfx"));
const pfx = pkcs.PKCS12._decode_PFX(pfxElement);
console.log(pfx);
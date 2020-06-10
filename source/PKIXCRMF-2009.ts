import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "x500-ts/dist/node/CertificateExtensions";

// CertId ::= SEQUENCE {
//     issuer           GeneralName,
//     serialNumber     INTEGER }

export class CertId {
    constructor (
        readonly issuer: GeneralName,
        readonly serialNumber: asn1.OCTET_STRING,
    ) {}
}
export const _root_component_type_list_1_spec_for_CertId: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, asn1.ASN1UniversalType.octetString), undefined, undefined),
];
export const _encode_CertId = function (value: CertId, elGetter: __utils.ASN1Encoder<CertId>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_GeneralName(value.issuer, __utils.BER),
            __utils._encodeOctetString(value.serialNumber, __utils.BER),
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};
export const _decode_CertId = function (el: asn1.ASN1Element): CertId {
    let issuer!: GeneralName;
    let serialNumber!: asn1.OCTET_STRING;
    const callbacks: __utils.DecodingMap = {
        "issuer": (_el: asn1.ASN1Element): void => { issuer = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
    };
    __utils._parse_sequence(el, callbacks, _root_component_type_list_1_spec_for_CertId, [], [], undefined);
    return new CertId(issuer, serialNumber);
};

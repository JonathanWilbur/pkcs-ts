import * as asn1 from "asn1-ts";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/modules/CertificateExtensions/GeneralName.ta";
import * as $ from "asn1-ts/dist/node/functional";

// CertId ::= SEQUENCE {
//     issuer           GeneralName,
//     serialNumber     INTEGER }

export class CertId {
    constructor(
        readonly issuer: GeneralName,
        readonly serialNumber: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_CertId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(
            asn1.ASN1TagClass.universal,
            asn1.ASN1UniversalType.octetString
        ),
        undefined,
        undefined
    ),
];
export const _encode_CertId = function (
    value: CertId,
    elGetter: $.ASN1Encoder<CertId>
): asn1.ASN1Element {
    return $._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                _encode_GeneralName(value.issuer, $.BER),
                $._encodeBigInt(value.serialNumber, $.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
            $.BER
    );
};
export const _decode_CertId = function (el: asn1.ASN1Element): CertId {
    let issuer!: GeneralName;
    let serialNumber!: asn1.OCTET_STRING;
    const callbacks: $.DecodingMap = {
        issuer: (_el: asn1.ASN1Element): void => {
            issuer = $._decode_implicit<GeneralName>(
                () => _decode_GeneralName
            )(_el);
        },
        serialNumber: (_el: asn1.ASN1Element): void => {
            serialNumber = $._decode_implicit<asn1.OCTET_STRING>(
                () => $._decodeBigInt
            )(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertId,
        [],
        [],
        undefined
    );
    return new CertId(issuer, serialNumber);
};

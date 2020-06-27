/*
    BEGIN_MODULE PKCS-10
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-10.modules.pkcs-10
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    Name,
    _decode_Name,
    _encode_Name,
    Attribute,
    _encode_Attribute,
    _decode_Attribute,
} from "x500-ts/dist/node/InformationFramework";
export {
    Name,
    _decode_Name,
    _encode_Name,
    Attribute,
    _encode_Attribute,
    _decode_Attribute,
} from "x500-ts/dist/node/InformationFramework";
import * as __utils from "./__utils";
export {
    authenticationFramework,
    informationFramework,
} from "x500-ts/dist/node/UsefulDefinitions";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/AuthenticationFramework";
export {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/AuthenticationFramework";

// TODO: ObjectSetAssignment: PKInfoAlgorithms

// TODO: ObjectSetAssignment: CRIAttributes

export type CertificationRequestInfo_version = asn1.INTEGER;
export const CertificationRequestInfo_version_v1: CertificationRequestInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_CertificationRequestInfo_version: __utils.ASN1Decoder<
    CertificationRequestInfo_version
> | null = null;
let _cached_encoder_for_CertificationRequestInfo_version: __utils.ASN1Encoder<
    CertificationRequestInfo_version
> | null = null;
export function _decode_CertificationRequestInfo_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificationRequestInfo_version) {
        _cached_decoder_for_CertificationRequestInfo_version =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_CertificationRequestInfo_version(el);
}
export function _encode_CertificationRequestInfo_version(
    value: CertificationRequestInfo_version,
    elGetter: __utils.ASN1Encoder<CertificationRequestInfo_version>
) {
    if (!_cached_encoder_for_CertificationRequestInfo_version) {
        _cached_encoder_for_CertificationRequestInfo_version =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_CertificationRequestInfo_version(
        value,
        elGetter
    );
}

export type Attributes = Attribute[]; // SetOfType
let _cached_decoder_for_Attributes: __utils.ASN1Decoder<
    Attributes
> | null = null;
let _cached_encoder_for_Attributes: __utils.ASN1Encoder<
    Attributes
> | null = null;
export function _decode_Attributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Attributes) {
        _cached_decoder_for_Attributes = __utils._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Attributes(el);
}
export function _encode_Attributes(
    value: Attributes,
    elGetter: __utils.ASN1Encoder<Attributes>
) {
    if (!_cached_encoder_for_Attributes) {
        _cached_encoder_for_Attributes = __utils._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            __utils.BER
        );
    }
    return _cached_encoder_for_Attributes(value, elGetter);
}

export class CertificationRequestInfo {
    constructor(
        readonly version: CertificationRequestInfo_version,
        readonly subject: Name,
        readonly subjectPKInfo: SubjectPublicKeyInfo,
        readonly attributes: Attributes
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificationRequestInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPKInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificationRequestInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificationRequestInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificationRequestInfo: __utils.ASN1Decoder<
    CertificationRequestInfo
> | null = null;
let _cached_encoder_for_CertificationRequestInfo: __utils.ASN1Encoder<
    CertificationRequestInfo
> | null = null;
export function _decode_CertificationRequestInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificationRequestInfo) {
        _cached_decoder_for_CertificationRequestInfo = function (
            el: asn1.ASN1Element
        ): CertificationRequestInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "CertificationRequestInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "subject";
            sequence[2].name = "subjectPKInfo";
            sequence[3].name = "attributes";
            let version!: CertificationRequestInfo_version;
            let subject!: Name;
            let subjectPKInfo!: SubjectPublicKeyInfo;
            let attributes!: Attributes;
            version = _decode_CertificationRequestInfo_version(sequence[0]);
            subject = _decode_Name(sequence[1]);
            subjectPKInfo = _decode_SubjectPublicKeyInfo(sequence[2]);
            attributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(sequence[3]);
            // TODO: Validate values.
            return new CertificationRequestInfo(
                version,
                subject,
                subjectPKInfo,
                attributes
            );
        };
    }
    return _cached_decoder_for_CertificationRequestInfo(el);
}
export function _encode_CertificationRequestInfo(
    value: CertificationRequestInfo,
    elGetter: __utils.ASN1Encoder<CertificationRequestInfo>
) {
    if (!_cached_encoder_for_CertificationRequestInfo) {
        _cached_encoder_for_CertificationRequestInfo = function (
            value: CertificationRequestInfo,
            elGetter: __utils.ASN1Encoder<CertificationRequestInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertificationRequestInfo_version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Name(
                            value.subject,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                            value.subjectPKInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Attributes,
                            __utils.BER
                        )(value.attributes, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CertificationRequestInfo(value, elGetter);
}

export class CertificationRequest {
    constructor(
        readonly certificationRequestInfo: CertificationRequestInfo,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificationRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certificationRequestInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificationRequest: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificationRequest: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificationRequest: __utils.ASN1Decoder<
    CertificationRequest
> | null = null;
let _cached_encoder_for_CertificationRequest: __utils.ASN1Encoder<
    CertificationRequest
> | null = null;
export function _decode_CertificationRequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificationRequest) {
        _cached_decoder_for_CertificationRequest = function (
            el: asn1.ASN1Element
        ): CertificationRequest {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "CertificationRequest contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "certificationRequestInfo";
            sequence[1].name = "signatureAlgorithm";
            sequence[2].name = "signature";
            let certificationRequestInfo!: CertificationRequestInfo;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: asn1.BIT_STRING;
            certificationRequestInfo = _decode_CertificationRequestInfo(
                sequence[0]
            );
            signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
            signature = __utils._decodeBitString(sequence[2]);
            // TODO: Validate values.
            return new CertificationRequest(
                certificationRequestInfo,
                signatureAlgorithm,
                signature
            );
        };
    }
    return _cached_decoder_for_CertificationRequest(el);
}
export function _encode_CertificationRequest(
    value: CertificationRequest,
    elGetter: __utils.ASN1Encoder<CertificationRequest>
) {
    if (!_cached_encoder_for_CertificationRequest) {
        _cached_encoder_for_CertificationRequest = function (
            value: CertificationRequest,
            elGetter: __utils.ASN1Encoder<CertificationRequest>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertificationRequestInfo(
                            value.certificationRequestInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signatureAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.signature,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CertificationRequest(value, elGetter);
}

// TODO: ObjectSetAssignment: SignatureAlgorithms

/* END_MODULE PKCS-10 */

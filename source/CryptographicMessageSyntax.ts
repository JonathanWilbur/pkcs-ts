/*
    BEGIN_MODULE CryptographicMessageSyntax
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.cms
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "x500-ts/dist/node/AttributeCertificateDefinitions";
import { Name, _decode_Name, _encode_Name } from "x500-ts/dist/node/InformationFramework";
import * as __utils from "./__utils";

export class ContentInfo {
    constructor(
        readonly content_type: asn1.OBJECT_IDENTIFIER,
        readonly pkcs7_content: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "content-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pkcs7-content",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContentInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContentInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContentInfo: __utils.ASN1Decoder<
    ContentInfo
> | null = null;
let _cached_encoder_for_ContentInfo: __utils.ASN1Encoder<
    ContentInfo
> | null = null;
export function _decode_ContentInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentInfo) {
        _cached_decoder_for_ContentInfo = function (
            el: asn1.ASN1Element
        ): ContentInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ContentInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "content-type";
            sequence[1].name = "pkcs7-content";
            let content_type!: asn1.OBJECT_IDENTIFIER;
            let pkcs7_content!: asn1.ASN1Element;
            content_type = __utils._decodeObjectIdentifier(sequence[0]);
            pkcs7_content = __utils._decode_implicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            // TODO: Validate values.
            return new ContentInfo(content_type, pkcs7_content);
        };
    }
    return _cached_decoder_for_ContentInfo(el);
}
export function _encode_ContentInfo(
    value: ContentInfo,
    elGetter: __utils.ASN1Encoder<ContentInfo>
) {
    if (!_cached_encoder_for_ContentInfo) {
        _cached_encoder_for_ContentInfo = function (
            value: ContentInfo,
            elGetter: __utils.ASN1Encoder<ContentInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.content_type,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.pkcs7_content, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ContentInfo(value, elGetter);
}

// TODO: ObjectClassAssignment: CMS-CONTENT-TYPE

// TODO: ObjectSetAssignment: CMSContentTable

export type CMSVersion = asn1.INTEGER;
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */
export const CMSVersion_v1: CMSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
export const CMSVersion_v2: CMSVersion = 2; /* LONG_NAMED_INTEGER_VALUE */
export const CMSVersion_v3: CMSVersion = 3; /* LONG_NAMED_INTEGER_VALUE */
export const CMSVersion_v4: CMSVersion = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_CMSVersion: __utils.ASN1Decoder<
    CMSVersion
> | null = null;
let _cached_encoder_for_CMSVersion: __utils.ASN1Encoder<
    CMSVersion
> | null = null;
export function _decode_CMSVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CMSVersion) {
        _cached_decoder_for_CMSVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_CMSVersion(el);
}
export function _encode_CMSVersion(
    value: CMSVersion,
    elGetter: __utils.ASN1Encoder<CMSVersion>
) {
    if (!_cached_encoder_for_CMSVersion) {
        _cached_encoder_for_CMSVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_CMSVersion(value, elGetter);
}

export type DigestAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_DigestAlgorithmIdentifier: __utils.ASN1Decoder<
    DigestAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_DigestAlgorithmIdentifier: __utils.ASN1Encoder<
    DigestAlgorithmIdentifier
> | null = null;
export function _decode_DigestAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestAlgorithmIdentifier) {
        _cached_decoder_for_DigestAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestAlgorithmIdentifier(el);
}
export function _encode_DigestAlgorithmIdentifier(
    value: DigestAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<DigestAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_DigestAlgorithmIdentifier) {
        _cached_encoder_for_DigestAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestAlgorithmIdentifier(value, elGetter);
}

export type DigestAlgorithmIdentifiers = DigestAlgorithmIdentifier[]; // SetOfType
let _cached_decoder_for_DigestAlgorithmIdentifiers: __utils.ASN1Decoder<
    DigestAlgorithmIdentifiers
> | null = null;
let _cached_encoder_for_DigestAlgorithmIdentifiers: __utils.ASN1Encoder<
    DigestAlgorithmIdentifiers
> | null = null;
export function _decode_DigestAlgorithmIdentifiers(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestAlgorithmIdentifiers) {
        _cached_decoder_for_DigestAlgorithmIdentifiers = __utils._decodeSetOf<
            DigestAlgorithmIdentifier
        >(() => _decode_DigestAlgorithmIdentifier);
    }
    return _cached_decoder_for_DigestAlgorithmIdentifiers(el);
}
export function _encode_DigestAlgorithmIdentifiers(
    value: DigestAlgorithmIdentifiers,
    elGetter: __utils.ASN1Encoder<DigestAlgorithmIdentifiers>
) {
    if (!_cached_encoder_for_DigestAlgorithmIdentifiers) {
        _cached_encoder_for_DigestAlgorithmIdentifiers = __utils._encodeSetOf<
            DigestAlgorithmIdentifier
        >(() => _encode_DigestAlgorithmIdentifier, __utils.BER);
    }
    return _cached_encoder_for_DigestAlgorithmIdentifiers(value, elGetter);
}

export type ContentType = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_ContentType: __utils.ASN1Decoder<
    ContentType
> | null = null;
let _cached_encoder_for_ContentType: __utils.ASN1Encoder<
    ContentType
> | null = null;
export function _decode_ContentType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentType) {
        _cached_decoder_for_ContentType = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ContentType(el);
}
export function _encode_ContentType(
    value: ContentType,
    elGetter: __utils.ASN1Encoder<ContentType>
) {
    if (!_cached_encoder_for_ContentType) {
        _cached_encoder_for_ContentType = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ContentType(value, elGetter);
}

export class EncapsulatedContentInfo {
    constructor(
        readonly eContentType: ContentType,
        readonly eContent: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "eContentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "eContent",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncapsulatedContentInfo: __utils.ASN1Decoder<
    EncapsulatedContentInfo
> | null = null;
let _cached_encoder_for_EncapsulatedContentInfo: __utils.ASN1Encoder<
    EncapsulatedContentInfo
> | null = null;
export function _decode_EncapsulatedContentInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncapsulatedContentInfo) {
        _cached_decoder_for_EncapsulatedContentInfo = function (
            el: asn1.ASN1Element
        ): EncapsulatedContentInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let eContentType!: ContentType;
            let eContent: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                eContentType: (_el: asn1.ASN1Element): void => {
                    eContentType = _decode_ContentType(_el);
                },
                eContent: (_el: asn1.ASN1Element): void => {
                    eContent = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncapsulatedContentInfo,
                _extension_additions_list_spec_for_EncapsulatedContentInfo,
                _root_component_type_list_2_spec_for_EncapsulatedContentInfo,
                undefined
            );
            return new EncapsulatedContentInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                eContentType,
                eContent
            );
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfo(el);
}
export function _encode_EncapsulatedContentInfo(
    value: EncapsulatedContentInfo,
    elGetter: __utils.ASN1Encoder<EncapsulatedContentInfo>
) {
    if (!_cached_encoder_for_EncapsulatedContentInfo) {
        _cached_encoder_for_EncapsulatedContentInfo = function (
            value: EncapsulatedContentInfo,
            elGetter: __utils.ASN1Encoder<EncapsulatedContentInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ContentType(
                            value.eContentType,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.eContent === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.eContent, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfo(value, elGetter);
}

export type AttributeValue = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_AttributeValue: __utils.ASN1Decoder<
    AttributeValue
> | null = null;
let _cached_encoder_for_AttributeValue: __utils.ASN1Encoder<
    AttributeValue
> | null = null;
export function _decode_AttributeValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeValue) {
        _cached_decoder_for_AttributeValue = __utils._decodeAny;
    }
    return _cached_decoder_for_AttributeValue(el);
}
export function _encode_AttributeValue(
    value: AttributeValue,
    elGetter: __utils.ASN1Encoder<AttributeValue>
) {
    if (!_cached_encoder_for_AttributeValue) {
        _cached_encoder_for_AttributeValue = __utils._encodeAny;
    }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}

export class Attribute {
    constructor(
        readonly attrType: asn1.OBJECT_IDENTIFIER,
        readonly attrValues: AttributeValue[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attrType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attrValues",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Attribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Attribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Attribute: __utils.ASN1Decoder<Attribute> | null = null;
let _cached_encoder_for_Attribute: __utils.ASN1Encoder<Attribute> | null = null;
export function _decode_Attribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Attribute) {
        _cached_decoder_for_Attribute = function (
            el: asn1.ASN1Element
        ): Attribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Attribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "attrType";
            sequence[1].name = "attrValues";
            let attrType!: asn1.OBJECT_IDENTIFIER;
            let attrValues!: AttributeValue[];
            attrType = __utils._decodeObjectIdentifier(sequence[0]);
            attrValues = __utils._decodeSetOf<AttributeValue>(
                () => _decode_AttributeValue
            )(sequence[1]);
            // TODO: Validate values.
            return new Attribute(attrType, attrValues);
        };
    }
    return _cached_decoder_for_Attribute(el);
}
export function _encode_Attribute(
    value: Attribute,
    elGetter: __utils.ASN1Encoder<Attribute>
) {
    if (!_cached_encoder_for_Attribute) {
        _cached_encoder_for_Attribute = function (
            value: Attribute,
            elGetter: __utils.ASN1Encoder<Attribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.attrType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSetOf<AttributeValue>(
                            () => _encode_AttributeValue,
                            __utils.BER
                        )(value.attrValues, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Attribute(value, elGetter);
}

export type UnauthAttributes = Attribute[]; // SetOfType
let _cached_decoder_for_UnauthAttributes: __utils.ASN1Decoder<
    UnauthAttributes
> | null = null;
let _cached_encoder_for_UnauthAttributes: __utils.ASN1Encoder<
    UnauthAttributes
> | null = null;
export function _decode_UnauthAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnauthAttributes) {
        _cached_decoder_for_UnauthAttributes = __utils._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnauthAttributes(el);
}
export function _encode_UnauthAttributes(
    value: UnauthAttributes,
    elGetter: __utils.ASN1Encoder<UnauthAttributes>
) {
    if (!_cached_encoder_for_UnauthAttributes) {
        _cached_encoder_for_UnauthAttributes = __utils._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            __utils.BER
        );
    }
    return _cached_encoder_for_UnauthAttributes(value, elGetter);
}

export class ExtendedCertificateInfo {
    constructor(
        readonly version: CMSVersion,
        readonly certificate: Certificate,
        readonly attributes: UnauthAttributes
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtendedCertificateInfo: __utils.ASN1Decoder<
    ExtendedCertificateInfo
> | null = null;
let _cached_encoder_for_ExtendedCertificateInfo: __utils.ASN1Encoder<
    ExtendedCertificateInfo
> | null = null;
export function _decode_ExtendedCertificateInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtendedCertificateInfo) {
        _cached_decoder_for_ExtendedCertificateInfo = function (
            el: asn1.ASN1Element
        ): ExtendedCertificateInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "ExtendedCertificateInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "certificate";
            sequence[2].name = "attributes";
            let version!: CMSVersion;
            let certificate!: Certificate;
            let attributes!: UnauthAttributes;
            version = _decode_CMSVersion(sequence[0]);
            certificate = _decode_Certificate(sequence[1]);
            attributes = _decode_UnauthAttributes(sequence[2]);
            // TODO: Validate values.
            return new ExtendedCertificateInfo(
                version,
                certificate,
                attributes
            );
        };
    }
    return _cached_decoder_for_ExtendedCertificateInfo(el);
}
export function _encode_ExtendedCertificateInfo(
    value: ExtendedCertificateInfo,
    elGetter: __utils.ASN1Encoder<ExtendedCertificateInfo>
) {
    if (!_cached_encoder_for_ExtendedCertificateInfo) {
        _cached_encoder_for_ExtendedCertificateInfo = function (
            value: ExtendedCertificateInfo,
            elGetter: __utils.ASN1Encoder<ExtendedCertificateInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Certificate(
                            value.certificate,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_UnauthAttributes(
                            value.attributes,
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
    return _cached_encoder_for_ExtendedCertificateInfo(value, elGetter);
}

export type SignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_SignatureAlgorithmIdentifier: __utils.ASN1Decoder<
    SignatureAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_SignatureAlgorithmIdentifier: __utils.ASN1Encoder<
    SignatureAlgorithmIdentifier
> | null = null;
export function _decode_SignatureAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignatureAlgorithmIdentifier) {
        _cached_decoder_for_SignatureAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_SignatureAlgorithmIdentifier(el);
}
export function _encode_SignatureAlgorithmIdentifier(
    value: SignatureAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<SignatureAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_SignatureAlgorithmIdentifier) {
        _cached_encoder_for_SignatureAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_SignatureAlgorithmIdentifier(value, elGetter);
}

export type Signature = asn1.BIT_STRING;
let _cached_decoder_for_Signature: __utils.ASN1Decoder<Signature> | null = null;
let _cached_encoder_for_Signature: __utils.ASN1Encoder<Signature> | null = null;
export function _decode_Signature(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signature) {
        _cached_decoder_for_Signature = __utils._decodeBitString;
    }
    return _cached_decoder_for_Signature(el);
}
export function _encode_Signature(
    value: Signature,
    elGetter: __utils.ASN1Encoder<Signature>
) {
    if (!_cached_encoder_for_Signature) {
        _cached_encoder_for_Signature = __utils._encodeBitString;
    }
    return _cached_encoder_for_Signature(value, elGetter);
}

export class ExtendedCertificate {
    constructor(
        readonly extendedCertificateInfo: ExtendedCertificateInfo,
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        readonly signature: Signature
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "extendedCertificateInfo",
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
export const _root_component_type_list_2_spec_for_ExtendedCertificate: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtendedCertificate: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtendedCertificate: __utils.ASN1Decoder<
    ExtendedCertificate
> | null = null;
let _cached_encoder_for_ExtendedCertificate: __utils.ASN1Encoder<
    ExtendedCertificate
> | null = null;
export function _decode_ExtendedCertificate(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtendedCertificate) {
        _cached_decoder_for_ExtendedCertificate = function (
            el: asn1.ASN1Element
        ): ExtendedCertificate {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "ExtendedCertificate contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "extendedCertificateInfo";
            sequence[1].name = "signatureAlgorithm";
            sequence[2].name = "signature";
            let extendedCertificateInfo!: ExtendedCertificateInfo;
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let signature!: Signature;
            extendedCertificateInfo = _decode_ExtendedCertificateInfo(
                sequence[0]
            );
            signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                sequence[1]
            );
            signature = _decode_Signature(sequence[2]);
            // TODO: Validate values.
            return new ExtendedCertificate(
                extendedCertificateInfo,
                signatureAlgorithm,
                signature
            );
        };
    }
    return _cached_decoder_for_ExtendedCertificate(el);
}
export function _encode_ExtendedCertificate(
    value: ExtendedCertificate,
    elGetter: __utils.ASN1Encoder<ExtendedCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificate) {
        _cached_encoder_for_ExtendedCertificate = function (
            value: ExtendedCertificate,
            elGetter: __utils.ASN1Encoder<ExtendedCertificate>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExtendedCertificateInfo(
                            value.extendedCertificateInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Signature(
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
    return _cached_encoder_for_ExtendedCertificate(value, elGetter);
}

export type CertificateChoices =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { attrCert: AttributeCertificate } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CertificateChoices: __utils.ASN1Decoder<
    CertificateChoices
> | null = null;
let _cached_encoder_for_CertificateChoices: __utils.ASN1Encoder<
    CertificateChoices
> | null = null;
export function _decode_CertificateChoices(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateChoices) {
        _cached_decoder_for_CertificateChoices = __utils._decode_inextensible_choice<
            CertificateChoices
        >({
            "UNIVERSAL 16": ["certificate", _decode_Certificate],
            "CONTEXT 0": [
                "extendedCertificate",
                __utils._decode_implicit<ExtendedCertificate>(
                    () => _decode_ExtendedCertificate
                ),
            ],
            "CONTEXT 1": [
                "attrCert",
                __utils._decode_implicit<AttributeCertificate>(
                    () => _decode_AttributeCertificate
                ),
            ],
        });
    }
    return _cached_decoder_for_CertificateChoices(el);
}
export function _encode_CertificateChoices(
    value: CertificateChoices,
    elGetter: __utils.ASN1Encoder<CertificateChoices>
) {
    if (!_cached_encoder_for_CertificateChoices) {
        _cached_encoder_for_CertificateChoices = __utils._encode_choice<
            CertificateChoices
        >(
            {
                certificate: _encode_Certificate,
                extendedCertificate: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    __utils.BER
                ),
                attrCert: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AttributeCertificate,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertificateChoices(value, elGetter);
}

export type CertificateSet = CertificateChoices[]; // SetOfType
let _cached_decoder_for_CertificateSet: __utils.ASN1Decoder<
    CertificateSet
> | null = null;
let _cached_encoder_for_CertificateSet: __utils.ASN1Encoder<
    CertificateSet
> | null = null;
export function _decode_CertificateSet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateSet) {
        _cached_decoder_for_CertificateSet = __utils._decodeSetOf<
            CertificateChoices
        >(() => _decode_CertificateChoices);
    }
    return _cached_decoder_for_CertificateSet(el);
}
export function _encode_CertificateSet(
    value: CertificateSet,
    elGetter: __utils.ASN1Encoder<CertificateSet>
) {
    if (!_cached_encoder_for_CertificateSet) {
        _cached_encoder_for_CertificateSet = __utils._encodeSetOf<
            CertificateChoices
        >(() => _encode_CertificateChoices, __utils.BER);
    }
    return _cached_encoder_for_CertificateSet(value, elGetter);
}

export type CertificateRevocationLists = CertificateList[]; // SetOfType
let _cached_decoder_for_CertificateRevocationLists: __utils.ASN1Decoder<
    CertificateRevocationLists
> | null = null;
let _cached_encoder_for_CertificateRevocationLists: __utils.ASN1Encoder<
    CertificateRevocationLists
> | null = null;
export function _decode_CertificateRevocationLists(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateRevocationLists) {
        _cached_decoder_for_CertificateRevocationLists = __utils._decodeSetOf<
            CertificateList
        >(() => _decode_CertificateList);
    }
    return _cached_decoder_for_CertificateRevocationLists(el);
}
export function _encode_CertificateRevocationLists(
    value: CertificateRevocationLists,
    elGetter: __utils.ASN1Encoder<CertificateRevocationLists>
) {
    if (!_cached_encoder_for_CertificateRevocationLists) {
        _cached_encoder_for_CertificateRevocationLists = __utils._encodeSetOf<
            CertificateList
        >(() => _encode_CertificateList, __utils.BER);
    }
    return _cached_encoder_for_CertificateRevocationLists(value, elGetter);
}

export class IssuerAndSerialNumber {
    constructor(
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IssuerAndSerialNumber: __utils.ASN1Decoder<
    IssuerAndSerialNumber
> | null = null;
let _cached_encoder_for_IssuerAndSerialNumber: __utils.ASN1Encoder<
    IssuerAndSerialNumber
> | null = null;
export function _decode_IssuerAndSerialNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IssuerAndSerialNumber) {
        _cached_decoder_for_IssuerAndSerialNumber = function (
            el: asn1.ASN1Element
        ): IssuerAndSerialNumber {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "IssuerAndSerialNumber contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new IssuerAndSerialNumber(issuer, serialNumber);
        };
    }
    return _cached_decoder_for_IssuerAndSerialNumber(el);
}
export function _encode_IssuerAndSerialNumber(
    value: IssuerAndSerialNumber,
    elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>
) {
    if (!_cached_encoder_for_IssuerAndSerialNumber) {
        _cached_encoder_for_IssuerAndSerialNumber = function (
            value: IssuerAndSerialNumber,
            elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(
                            value.issuer,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serialNumber,
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
    return _cached_encoder_for_IssuerAndSerialNumber(value, elGetter);
}

export type SubjectKeyIdentifier = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_SubjectKeyIdentifier: __utils.ASN1Decoder<
    SubjectKeyIdentifier
> | null = null;
let _cached_encoder_for_SubjectKeyIdentifier: __utils.ASN1Encoder<
    SubjectKeyIdentifier
> | null = null;
export function _decode_SubjectKeyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectKeyIdentifier) {
        _cached_decoder_for_SubjectKeyIdentifier = __utils._decodeOctetString;
    }
    return _cached_decoder_for_SubjectKeyIdentifier(el);
}
export function _encode_SubjectKeyIdentifier(
    value: SubjectKeyIdentifier,
    elGetter: __utils.ASN1Encoder<SubjectKeyIdentifier>
) {
    if (!_cached_encoder_for_SubjectKeyIdentifier) {
        _cached_encoder_for_SubjectKeyIdentifier = __utils._encodeOctetString;
    }
    return _cached_encoder_for_SubjectKeyIdentifier(value, elGetter);
}

export type SignerIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_SignerIdentifier: __utils.ASN1Decoder<
    SignerIdentifier
> | null = null;
let _cached_encoder_for_SignerIdentifier: __utils.ASN1Encoder<
    SignerIdentifier
> | null = null;
export function _decode_SignerIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignerIdentifier) {
        _cached_decoder_for_SignerIdentifier = __utils._decode_inextensible_choice<
            SignerIdentifier
        >({
            "UNIVERSAL 16": [
                "issuerAndSerialNumber",
                _decode_IssuerAndSerialNumber,
            ],
            "CONTEXT 0": [
                "subjectKeyIdentifier",
                __utils._decode_implicit<SubjectKeyIdentifier>(
                    () => _decode_SubjectKeyIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_SignerIdentifier(el);
}
export function _encode_SignerIdentifier(
    value: SignerIdentifier,
    elGetter: __utils.ASN1Encoder<SignerIdentifier>
) {
    if (!_cached_encoder_for_SignerIdentifier) {
        _cached_encoder_for_SignerIdentifier = __utils._encode_choice<
            SignerIdentifier
        >(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SignerIdentifier(value, elGetter);
}

export type SignedAttributes = Attribute[]; // SetOfType
let _cached_decoder_for_SignedAttributes: __utils.ASN1Decoder<
    SignedAttributes
> | null = null;
let _cached_encoder_for_SignedAttributes: __utils.ASN1Encoder<
    SignedAttributes
> | null = null;
export function _decode_SignedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = __utils._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_SignedAttributes(el);
}
export function _encode_SignedAttributes(
    value: SignedAttributes,
    elGetter: __utils.ASN1Encoder<SignedAttributes>
) {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = __utils._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            __utils.BER
        );
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}

export type SignatureValue = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_SignatureValue: __utils.ASN1Decoder<
    SignatureValue
> | null = null;
let _cached_encoder_for_SignatureValue: __utils.ASN1Encoder<
    SignatureValue
> | null = null;
export function _decode_SignatureValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignatureValue) {
        _cached_decoder_for_SignatureValue = __utils._decodeOctetString;
    }
    return _cached_decoder_for_SignatureValue(el);
}
export function _encode_SignatureValue(
    value: SignatureValue,
    elGetter: __utils.ASN1Encoder<SignatureValue>
) {
    if (!_cached_encoder_for_SignatureValue) {
        _cached_encoder_for_SignatureValue = __utils._encodeOctetString;
    }
    return _cached_encoder_for_SignatureValue(value, elGetter);
}

export type UnsignedAttributes = Attribute[]; // SetOfType
let _cached_decoder_for_UnsignedAttributes: __utils.ASN1Decoder<
    UnsignedAttributes
> | null = null;
let _cached_encoder_for_UnsignedAttributes: __utils.ASN1Encoder<
    UnsignedAttributes
> | null = null;
export function _decode_UnsignedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnsignedAttributes) {
        _cached_decoder_for_UnsignedAttributes = __utils._decodeSetOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_UnsignedAttributes(el);
}
export function _encode_UnsignedAttributes(
    value: UnsignedAttributes,
    elGetter: __utils.ASN1Encoder<UnsignedAttributes>
) {
    if (!_cached_encoder_for_UnsignedAttributes) {
        _cached_encoder_for_UnsignedAttributes = __utils._encodeSetOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_UnsignedAttributes(value, elGetter);
}

export class SignerInfo {
    constructor(
        readonly version: CMSVersion,
        readonly sid: SignerIdentifier,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly signedAttrs: asn1.OPTIONAL<SignedAttributes>,
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        readonly signature: SignatureValue,
        readonly unsignedAttrs: asn1.OPTIONAL<UnsignedAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_SignerInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sid",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
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
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unsignedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignerInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignerInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignerInfo: __utils.ASN1Decoder<
    SignerInfo
> | null = null;
let _cached_encoder_for_SignerInfo: __utils.ASN1Encoder<
    SignerInfo
> | null = null;
export function _decode_SignerInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignerInfo) {
        _cached_decoder_for_SignerInfo = function (
            el: asn1.ASN1Element
        ): SignerInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let sid!: SignerIdentifier;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let signedAttrs: asn1.OPTIONAL<SignedAttributes>;
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let signature!: SignatureValue;
            let unsignedAttrs: asn1.OPTIONAL<UnsignedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                sid: (_el: asn1.ASN1Element): void => {
                    sid = _decode_SignerIdentifier(_el);
                },
                digestAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
                },
                signedAttrs: (_el: asn1.ASN1Element): void => {
                    signedAttrs = __utils._decode_implicit<SignedAttributes>(
                        () => _decode_SignedAttributes
                    )(_el);
                },
                signatureAlgorithm: (_el: asn1.ASN1Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                signature: (_el: asn1.ASN1Element): void => {
                    signature = _decode_SignatureValue(_el);
                },
                unsignedAttrs: (_el: asn1.ASN1Element): void => {
                    unsignedAttrs = __utils._decode_implicit<
                        UnsignedAttributes
                    >(() => _decode_UnsignedAttributes)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignerInfo,
                _extension_additions_list_spec_for_SignerInfo,
                _root_component_type_list_2_spec_for_SignerInfo,
                undefined
            );
            return new SignerInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                sid,
                digestAlgorithm,
                signedAttrs,
                signatureAlgorithm,
                signature,
                unsignedAttrs
            );
        };
    }
    return _cached_decoder_for_SignerInfo(el);
}
export function _encode_SignerInfo(
    value: SignerInfo,
    elGetter: __utils.ASN1Encoder<SignerInfo>
) {
    if (!_cached_encoder_for_SignerInfo) {
        _cached_encoder_for_SignerInfo = function (
            value: SignerInfo,
            elGetter: __utils.ASN1Encoder<SignerInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignerIdentifier(
                            value.sid,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.signedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_SignedAttributes,
                                  __utils.BER
                              )(value.signedAttrs, __utils.BER),
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureValue(
                            value.signature,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.unsignedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_UnsignedAttributes,
                                  __utils.BER
                              )(value.unsignedAttrs, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}

export type SignerInfos = SignerInfo[]; // SetOfType
let _cached_decoder_for_SignerInfos: __utils.ASN1Decoder<
    SignerInfos
> | null = null;
let _cached_encoder_for_SignerInfos: __utils.ASN1Encoder<
    SignerInfos
> | null = null;
export function _decode_SignerInfos(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignerInfos) {
        _cached_decoder_for_SignerInfos = __utils._decodeSetOf<SignerInfo>(
            () => _decode_SignerInfo
        );
    }
    return _cached_decoder_for_SignerInfos(el);
}
export function _encode_SignerInfos(
    value: SignerInfos,
    elGetter: __utils.ASN1Encoder<SignerInfos>
) {
    if (!_cached_encoder_for_SignerInfos) {
        _cached_encoder_for_SignerInfos = __utils._encodeSetOf<SignerInfo>(
            () => _encode_SignerInfo,
            __utils.BER
        );
    }
    return _cached_encoder_for_SignerInfos(value, elGetter);
}

export class SignedData {
    constructor(
        readonly version: CMSVersion,
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly certificates: asn1.OPTIONAL<CertificateSet>,
        readonly crls: asn1.OPTIONAL<CertificateRevocationLists>,
        readonly signerInfos: SignerInfos
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithms",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encapContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signerInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignedData: __utils.ASN1Decoder<
    SignedData
> | null = null;
let _cached_encoder_for_SignedData: __utils.ASN1Encoder<
    SignedData
> | null = null;
export function _decode_SignedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedData) {
        _cached_decoder_for_SignedData = function (
            el: asn1.ASN1Element
        ): SignedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let digestAlgorithms!: DigestAlgorithmIdentifiers;
            let encapContentInfo!: EncapsulatedContentInfo;
            let certificates: asn1.OPTIONAL<CertificateSet>;
            let crls: asn1.OPTIONAL<CertificateRevocationLists>;
            let signerInfos!: SignerInfos;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                digestAlgorithms: (_el: asn1.ASN1Element): void => {
                    digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
                },
                encapContentInfo: (_el: asn1.ASN1Element): void => {
                    encapContentInfo = _decode_EncapsulatedContentInfo(_el);
                },
                certificates: (_el: asn1.ASN1Element): void => {
                    certificates = __utils._decode_implicit<CertificateSet>(
                        () => _decode_CertificateSet
                    )(_el);
                },
                crls: (_el: asn1.ASN1Element): void => {
                    crls = __utils._decode_implicit<CertificateRevocationLists>(
                        () => _decode_CertificateRevocationLists
                    )(_el);
                },
                signerInfos: (_el: asn1.ASN1Element): void => {
                    signerInfos = _decode_SignerInfos(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedData,
                _extension_additions_list_spec_for_SignedData,
                _root_component_type_list_2_spec_for_SignedData,
                undefined
            );
            return new SignedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                digestAlgorithms,
                encapContentInfo,
                certificates,
                crls,
                signerInfos
            );
        };
    }
    return _cached_decoder_for_SignedData(el);
}
export function _encode_SignedData(
    value: SignedData,
    elGetter: __utils.ASN1Encoder<SignedData>
) {
    if (!_cached_encoder_for_SignedData) {
        _cached_encoder_for_SignedData = function (
            value: SignedData,
            elGetter: __utils.ASN1Encoder<SignedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                            value.digestAlgorithms,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  __utils.BER
                              )(value.certificates, __utils.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  __utils.BER
                              )(value.crls, __utils.BER),
                        /* REQUIRED   */ _encode_SignerInfos(
                            value.signerInfos,
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
    return _cached_encoder_for_SignedData(value, elGetter);
}

// TODO: ObjectClassAssignment: OPEN

export class OriginatorInfo {
    constructor(
        readonly certs: asn1.OPTIONAL<CertificateSet>,
        readonly crls: asn1.OPTIONAL<CertificateRevocationLists>
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OriginatorInfo: __utils.ASN1Decoder<
    OriginatorInfo
> | null = null;
let _cached_encoder_for_OriginatorInfo: __utils.ASN1Encoder<
    OriginatorInfo
> | null = null;
export function _decode_OriginatorInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OriginatorInfo) {
        _cached_decoder_for_OriginatorInfo = function (
            el: asn1.ASN1Element
        ): OriginatorInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certs: asn1.OPTIONAL<CertificateSet>;
            let crls: asn1.OPTIONAL<CertificateRevocationLists>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decode_implicit<CertificateSet>(
                        () => _decode_CertificateSet
                    )(_el);
                },
                crls: (_el: asn1.ASN1Element): void => {
                    crls = __utils._decode_implicit<CertificateRevocationLists>(
                        () => _decode_CertificateRevocationLists
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OriginatorInfo,
                _extension_additions_list_spec_for_OriginatorInfo,
                _root_component_type_list_2_spec_for_OriginatorInfo,
                undefined
            );
            return new OriginatorInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                certs,
                crls
            );
        };
    }
    return _cached_decoder_for_OriginatorInfo(el);
}
export function _encode_OriginatorInfo(
    value: OriginatorInfo,
    elGetter: __utils.ASN1Encoder<OriginatorInfo>
) {
    if (!_cached_encoder_for_OriginatorInfo) {
        _cached_encoder_for_OriginatorInfo = function (
            value: OriginatorInfo,
            elGetter: __utils.ASN1Encoder<OriginatorInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.certs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  __utils.BER
                              )(value.certs, __utils.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  __utils.BER
                              )(value.crls, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OriginatorInfo(value, elGetter);
}

export type RecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_RecipientIdentifier: __utils.ASN1Decoder<
    RecipientIdentifier
> | null = null;
let _cached_encoder_for_RecipientIdentifier: __utils.ASN1Encoder<
    RecipientIdentifier
> | null = null;
export function _decode_RecipientIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RecipientIdentifier) {
        _cached_decoder_for_RecipientIdentifier = __utils._decode_inextensible_choice<
            RecipientIdentifier
        >({
            "UNIVERSAL 16": [
                "issuerAndSerialNumber",
                _decode_IssuerAndSerialNumber,
            ],
            "CONTEXT 0": [
                "subjectKeyIdentifier",
                __utils._decode_implicit<SubjectKeyIdentifier>(
                    () => _decode_SubjectKeyIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_RecipientIdentifier(el);
}
export function _encode_RecipientIdentifier(
    value: RecipientIdentifier,
    elGetter: __utils.ASN1Encoder<RecipientIdentifier>
) {
    if (!_cached_encoder_for_RecipientIdentifier) {
        _cached_encoder_for_RecipientIdentifier = __utils._encode_choice<
            RecipientIdentifier
        >(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RecipientIdentifier(value, elGetter);
}

export type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_KeyEncryptionAlgorithmIdentifier: __utils.ASN1Decoder<
    KeyEncryptionAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_KeyEncryptionAlgorithmIdentifier: __utils.ASN1Encoder<
    KeyEncryptionAlgorithmIdentifier
> | null = null;
export function _decode_KeyEncryptionAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_KeyEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyEncryptionAlgorithmIdentifier(el);
}
export function _encode_KeyEncryptionAlgorithmIdentifier(
    value: KeyEncryptionAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<KeyEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_KeyEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

export type EncryptedKey = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedKey: __utils.ASN1Decoder<
    EncryptedKey
> | null = null;
let _cached_encoder_for_EncryptedKey: __utils.ASN1Encoder<
    EncryptedKey
> | null = null;
export function _decode_EncryptedKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedKey) {
        _cached_decoder_for_EncryptedKey = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedKey(el);
}
export function _encode_EncryptedKey(
    value: EncryptedKey,
    elGetter: __utils.ASN1Encoder<EncryptedKey>
) {
    if (!_cached_encoder_for_EncryptedKey) {
        _cached_encoder_for_EncryptedKey = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedKey(value, elGetter);
}

export class KeyTransRecipientInfo {
    constructor(
        readonly version: CMSVersion,
        readonly rid: RecipientIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyTransRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "rid",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyTransRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyTransRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyTransRecipientInfo: __utils.ASN1Decoder<
    KeyTransRecipientInfo
> | null = null;
let _cached_encoder_for_KeyTransRecipientInfo: __utils.ASN1Encoder<
    KeyTransRecipientInfo
> | null = null;
export function _decode_KeyTransRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyTransRecipientInfo) {
        _cached_decoder_for_KeyTransRecipientInfo = function (
            el: asn1.ASN1Element
        ): KeyTransRecipientInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "KeyTransRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "rid";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: CMSVersion;
            let rid!: RecipientIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_CMSVersion(sequence[0]);
            rid = _decode_RecipientIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            // TODO: Validate values.
            return new KeyTransRecipientInfo(
                version,
                rid,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KeyTransRecipientInfo(el);
}
export function _encode_KeyTransRecipientInfo(
    value: KeyTransRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyTransRecipientInfo>
) {
    if (!_cached_encoder_for_KeyTransRecipientInfo) {
        _cached_encoder_for_KeyTransRecipientInfo = function (
            value: KeyTransRecipientInfo,
            elGetter: __utils.ASN1Encoder<KeyTransRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_RecipientIdentifier(
                            value.rid,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
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
    return _cached_encoder_for_KeyTransRecipientInfo(value, elGetter);
}

export class OriginatorPublicKey {
    constructor(
        readonly algorithm: AlgorithmIdentifier,
        readonly publicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OriginatorPublicKey: __utils.ASN1Decoder<
    OriginatorPublicKey
> | null = null;
let _cached_encoder_for_OriginatorPublicKey: __utils.ASN1Encoder<
    OriginatorPublicKey
> | null = null;
export function _decode_OriginatorPublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OriginatorPublicKey) {
        _cached_decoder_for_OriginatorPublicKey = function (
            el: asn1.ASN1Element
        ): OriginatorPublicKey {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OriginatorPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "algorithm";
            sequence[1].name = "publicKey";
            let algorithm!: AlgorithmIdentifier;
            let publicKey!: asn1.BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            publicKey = __utils._decodeBitString(sequence[1]);
            // TODO: Validate values.
            return new OriginatorPublicKey(algorithm, publicKey);
        };
    }
    return _cached_decoder_for_OriginatorPublicKey(el);
}
export function _encode_OriginatorPublicKey(
    value: OriginatorPublicKey,
    elGetter: __utils.ASN1Encoder<OriginatorPublicKey>
) {
    if (!_cached_encoder_for_OriginatorPublicKey) {
        _cached_encoder_for_OriginatorPublicKey = function (
            value: OriginatorPublicKey,
            elGetter: __utils.ASN1Encoder<OriginatorPublicKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.publicKey,
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
    return _cached_encoder_for_OriginatorPublicKey(value, elGetter);
}

export type OriginatorIdentifierOrKey =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { originatorKey: OriginatorPublicKey } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OriginatorIdentifierOrKey: __utils.ASN1Decoder<
    OriginatorIdentifierOrKey
> | null = null;
let _cached_encoder_for_OriginatorIdentifierOrKey: __utils.ASN1Encoder<
    OriginatorIdentifierOrKey
> | null = null;
export function _decode_OriginatorIdentifierOrKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OriginatorIdentifierOrKey) {
        _cached_decoder_for_OriginatorIdentifierOrKey = __utils._decode_inextensible_choice<
            OriginatorIdentifierOrKey
        >({
            "UNIVERSAL 16": [
                "issuerAndSerialNumber",
                _decode_IssuerAndSerialNumber,
            ],
            "CONTEXT 0": [
                "subjectKeyIdentifier",
                __utils._decode_implicit<SubjectKeyIdentifier>(
                    () => _decode_SubjectKeyIdentifier
                ),
            ],
            "CONTEXT 1": [
                "originatorKey",
                __utils._decode_implicit<OriginatorPublicKey>(
                    () => _decode_OriginatorPublicKey
                ),
            ],
        });
    }
    return _cached_decoder_for_OriginatorIdentifierOrKey(el);
}
export function _encode_OriginatorIdentifierOrKey(
    value: OriginatorIdentifierOrKey,
    elGetter: __utils.ASN1Encoder<OriginatorIdentifierOrKey>
) {
    if (!_cached_encoder_for_OriginatorIdentifierOrKey) {
        _cached_encoder_for_OriginatorIdentifierOrKey = __utils._encode_choice<
            OriginatorIdentifierOrKey
        >(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    __utils.BER
                ),
                originatorKey: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_OriginatorPublicKey,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OriginatorIdentifierOrKey(value, elGetter);
}

export type UserKeyingMaterial = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_UserKeyingMaterial: __utils.ASN1Decoder<
    UserKeyingMaterial
> | null = null;
let _cached_encoder_for_UserKeyingMaterial: __utils.ASN1Encoder<
    UserKeyingMaterial
> | null = null;
export function _decode_UserKeyingMaterial(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserKeyingMaterial) {
        _cached_decoder_for_UserKeyingMaterial = __utils._decodeOctetString;
    }
    return _cached_decoder_for_UserKeyingMaterial(el);
}
export function _encode_UserKeyingMaterial(
    value: UserKeyingMaterial,
    elGetter: __utils.ASN1Encoder<UserKeyingMaterial>
) {
    if (!_cached_encoder_for_UserKeyingMaterial) {
        _cached_encoder_for_UserKeyingMaterial = __utils._encodeOctetString;
    }
    return _cached_encoder_for_UserKeyingMaterial(value, elGetter);
}

export class OtherKeyAttribute {
    constructor(
        readonly keyAttributeIdentifier: asn1.OBJECT_IDENTIFIER,
        readonly keyAttribute: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyAttributeIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyAttribute",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OtherKeyAttribute: __utils.ASN1Decoder<
    OtherKeyAttribute
> | null = null;
let _cached_encoder_for_OtherKeyAttribute: __utils.ASN1Encoder<
    OtherKeyAttribute
> | null = null;
export function _decode_OtherKeyAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OtherKeyAttribute) {
        _cached_decoder_for_OtherKeyAttribute = function (
            el: asn1.ASN1Element
        ): OtherKeyAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyAttributeIdentifier!: asn1.OBJECT_IDENTIFIER;
            let keyAttribute: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                keyAttributeIdentifier: (_el: asn1.ASN1Element): void => {
                    keyAttributeIdentifier = __utils._decodeObjectIdentifier(
                        _el
                    );
                },
                keyAttribute: (_el: asn1.ASN1Element): void => {
                    keyAttribute = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OtherKeyAttribute,
                _extension_additions_list_spec_for_OtherKeyAttribute,
                _root_component_type_list_2_spec_for_OtherKeyAttribute,
                undefined
            );
            return new OtherKeyAttribute /* SEQUENCE_CONSTRUCTOR_CALL */(
                keyAttributeIdentifier,
                keyAttribute
            );
        };
    }
    return _cached_decoder_for_OtherKeyAttribute(el);
}
export function _encode_OtherKeyAttribute(
    value: OtherKeyAttribute,
    elGetter: __utils.ASN1Encoder<OtherKeyAttribute>
) {
    if (!_cached_encoder_for_OtherKeyAttribute) {
        _cached_encoder_for_OtherKeyAttribute = function (
            value: OtherKeyAttribute,
            elGetter: __utils.ASN1Encoder<OtherKeyAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.keyAttributeIdentifier,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.keyAttribute === undefined
                            ? undefined
                            : __utils._encodeAny(
                                  value.keyAttribute,
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
    return _cached_encoder_for_OtherKeyAttribute(value, elGetter);
}

export class RecipientKeyIdentifier {
    constructor(
        readonly subjectKeyIdentifier: SubjectKeyIdentifier,
        readonly date: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly other: asn1.OPTIONAL<OtherKeyAttribute>
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subjectKeyIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "date",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "other",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RecipientKeyIdentifier: __utils.ASN1Decoder<
    RecipientKeyIdentifier
> | null = null;
let _cached_encoder_for_RecipientKeyIdentifier: __utils.ASN1Encoder<
    RecipientKeyIdentifier
> | null = null;
export function _decode_RecipientKeyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RecipientKeyIdentifier) {
        _cached_decoder_for_RecipientKeyIdentifier = function (
            el: asn1.ASN1Element
        ): RecipientKeyIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subjectKeyIdentifier!: SubjectKeyIdentifier;
            let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let other: asn1.OPTIONAL<OtherKeyAttribute>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                subjectKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    subjectKeyIdentifier = _decode_SubjectKeyIdentifier(_el);
                },
                date: (_el: asn1.ASN1Element): void => {
                    date = __utils._decodeGeneralizedTime(_el);
                },
                other: (_el: asn1.ASN1Element): void => {
                    other = _decode_OtherKeyAttribute(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RecipientKeyIdentifier,
                _extension_additions_list_spec_for_RecipientKeyIdentifier,
                _root_component_type_list_2_spec_for_RecipientKeyIdentifier,
                undefined
            );
            return new RecipientKeyIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                subjectKeyIdentifier,
                date,
                other
            );
        };
    }
    return _cached_decoder_for_RecipientKeyIdentifier(el);
}
export function _encode_RecipientKeyIdentifier(
    value: RecipientKeyIdentifier,
    elGetter: __utils.ASN1Encoder<RecipientKeyIdentifier>
) {
    if (!_cached_encoder_for_RecipientKeyIdentifier) {
        _cached_encoder_for_RecipientKeyIdentifier = function (
            value: RecipientKeyIdentifier,
            elGetter: __utils.ASN1Encoder<RecipientKeyIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectKeyIdentifier(
                            value.subjectKeyIdentifier,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.date === undefined
                            ? undefined
                            : __utils._encodeGeneralizedTime(
                                  value.date,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.other === undefined
                            ? undefined
                            : _encode_OtherKeyAttribute(
                                  value.other,
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
    return _cached_encoder_for_RecipientKeyIdentifier(value, elGetter);
}

export type KeyAgreeRecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { rKeyId: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_KeyAgreeRecipientIdentifier: __utils.ASN1Decoder<
    KeyAgreeRecipientIdentifier
> | null = null;
let _cached_encoder_for_KeyAgreeRecipientIdentifier: __utils.ASN1Encoder<
    KeyAgreeRecipientIdentifier
> | null = null;
export function _decode_KeyAgreeRecipientIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyAgreeRecipientIdentifier) {
        _cached_decoder_for_KeyAgreeRecipientIdentifier = __utils._decode_inextensible_choice<
            KeyAgreeRecipientIdentifier
        >({
            "UNIVERSAL 16": [
                "issuerAndSerialNumber",
                _decode_IssuerAndSerialNumber,
            ],
            "CONTEXT 0": [
                "rKeyId",
                __utils._decode_implicit<RecipientKeyIdentifier>(
                    () => _decode_RecipientKeyIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_KeyAgreeRecipientIdentifier(el);
}
export function _encode_KeyAgreeRecipientIdentifier(
    value: KeyAgreeRecipientIdentifier,
    elGetter: __utils.ASN1Encoder<KeyAgreeRecipientIdentifier>
) {
    if (!_cached_encoder_for_KeyAgreeRecipientIdentifier) {
        _cached_encoder_for_KeyAgreeRecipientIdentifier = __utils._encode_choice<
            KeyAgreeRecipientIdentifier
        >(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                rKeyId: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_RecipientKeyIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_KeyAgreeRecipientIdentifier(value, elGetter);
}

export class RecipientEncryptedKey {
    constructor(
        readonly rid: KeyAgreeRecipientIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rid",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RecipientEncryptedKey: __utils.ASN1Decoder<
    RecipientEncryptedKey
> | null = null;
let _cached_encoder_for_RecipientEncryptedKey: __utils.ASN1Encoder<
    RecipientEncryptedKey
> | null = null;
export function _decode_RecipientEncryptedKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RecipientEncryptedKey) {
        _cached_decoder_for_RecipientEncryptedKey = function (
            el: asn1.ASN1Element
        ): RecipientEncryptedKey {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "RecipientEncryptedKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "rid";
            sequence[1].name = "encryptedKey";
            let rid!: KeyAgreeRecipientIdentifier;
            let encryptedKey!: EncryptedKey;
            rid = _decode_KeyAgreeRecipientIdentifier(sequence[0]);
            encryptedKey = _decode_EncryptedKey(sequence[1]);
            // TODO: Validate values.
            return new RecipientEncryptedKey(rid, encryptedKey);
        };
    }
    return _cached_decoder_for_RecipientEncryptedKey(el);
}
export function _encode_RecipientEncryptedKey(
    value: RecipientEncryptedKey,
    elGetter: __utils.ASN1Encoder<RecipientEncryptedKey>
) {
    if (!_cached_encoder_for_RecipientEncryptedKey) {
        _cached_encoder_for_RecipientEncryptedKey = function (
            value: RecipientEncryptedKey,
            elGetter: __utils.ASN1Encoder<RecipientEncryptedKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_KeyAgreeRecipientIdentifier(
                            value.rid,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
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
    return _cached_encoder_for_RecipientEncryptedKey(value, elGetter);
}

export type RecipientEncryptedKeys = RecipientEncryptedKey[]; // SequenceOfType
let _cached_decoder_for_RecipientEncryptedKeys: __utils.ASN1Decoder<
    RecipientEncryptedKeys
> | null = null;
let _cached_encoder_for_RecipientEncryptedKeys: __utils.ASN1Encoder<
    RecipientEncryptedKeys
> | null = null;
export function _decode_RecipientEncryptedKeys(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RecipientEncryptedKeys) {
        _cached_decoder_for_RecipientEncryptedKeys = __utils._decodeSequenceOf<
            RecipientEncryptedKey
        >(() => _decode_RecipientEncryptedKey);
    }
    return _cached_decoder_for_RecipientEncryptedKeys(el);
}
export function _encode_RecipientEncryptedKeys(
    value: RecipientEncryptedKeys,
    elGetter: __utils.ASN1Encoder<RecipientEncryptedKeys>
) {
    if (!_cached_encoder_for_RecipientEncryptedKeys) {
        _cached_encoder_for_RecipientEncryptedKeys = __utils._encodeSequenceOf<
            RecipientEncryptedKey
        >(() => _encode_RecipientEncryptedKey, __utils.BER);
    }
    return _cached_encoder_for_RecipientEncryptedKeys(value, elGetter);
}

export class KeyAgreeRecipientInfo {
    constructor(
        readonly version: CMSVersion,
        readonly originator: OriginatorIdentifierOrKey,
        readonly ukm: asn1.OPTIONAL<UserKeyingMaterial>,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originator",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ukm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientEncryptedKeys",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyAgreeRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyAgreeRecipientInfo: __utils.ASN1Decoder<
    KeyAgreeRecipientInfo
> | null = null;
let _cached_encoder_for_KeyAgreeRecipientInfo: __utils.ASN1Encoder<
    KeyAgreeRecipientInfo
> | null = null;
export function _decode_KeyAgreeRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyAgreeRecipientInfo) {
        _cached_decoder_for_KeyAgreeRecipientInfo = function (
            el: asn1.ASN1Element
        ): KeyAgreeRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let originator!: OriginatorIdentifierOrKey;
            let ukm: asn1.OPTIONAL<UserKeyingMaterial>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let recipientEncryptedKeys!: RecipientEncryptedKeys;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                originator: (_el: asn1.ASN1Element): void => {
                    originator = __utils._decode_explicit<
                        OriginatorIdentifierOrKey
                    >(() => _decode_OriginatorIdentifierOrKey)(_el);
                },
                ukm: (_el: asn1.ASN1Element): void => {
                    ukm = __utils._decode_explicit<UserKeyingMaterial>(
                        () => _decode_UserKeyingMaterial
                    )(_el);
                },
                keyEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
                    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                recipientEncryptedKeys: (_el: asn1.ASN1Element): void => {
                    recipientEncryptedKeys = _decode_RecipientEncryptedKeys(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo,
                _extension_additions_list_spec_for_KeyAgreeRecipientInfo,
                _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo,
                undefined
            );
            return new KeyAgreeRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                originator,
                ukm,
                keyEncryptionAlgorithm,
                recipientEncryptedKeys
            );
        };
    }
    return _cached_decoder_for_KeyAgreeRecipientInfo(el);
}
export function _encode_KeyAgreeRecipientInfo(
    value: KeyAgreeRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyAgreeRecipientInfo>
) {
    if (!_cached_encoder_for_KeyAgreeRecipientInfo) {
        _cached_encoder_for_KeyAgreeRecipientInfo = function (
            value: KeyAgreeRecipientInfo,
            elGetter: __utils.ASN1Encoder<KeyAgreeRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_OriginatorIdentifierOrKey,
                            __utils.BER
                        )(value.originator, __utils.BER),
                        /* IF_ABSENT  */ value.ukm === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_UserKeyingMaterial,
                                  __utils.BER
                              )(value.ukm, __utils.BER),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_RecipientEncryptedKeys(
                            value.recipientEncryptedKeys,
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
    return _cached_encoder_for_KeyAgreeRecipientInfo(value, elGetter);
}

export class KEKIdentifier {
    constructor(
        readonly keyIdentifier: asn1.OCTET_STRING,
        readonly date: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly other: asn1.OPTIONAL<OtherKeyAttribute>
    ) {}
}
export const _root_component_type_list_1_spec_for_KEKIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "date",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "other",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KEKIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KEKIdentifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KEKIdentifier: __utils.ASN1Decoder<
    KEKIdentifier
> | null = null;
let _cached_encoder_for_KEKIdentifier: __utils.ASN1Encoder<
    KEKIdentifier
> | null = null;
export function _decode_KEKIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KEKIdentifier) {
        _cached_decoder_for_KEKIdentifier = function (
            el: asn1.ASN1Element
        ): KEKIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyIdentifier!: asn1.OCTET_STRING;
            let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let other: asn1.OPTIONAL<OtherKeyAttribute>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                keyIdentifier: (_el: asn1.ASN1Element): void => {
                    keyIdentifier = __utils._decodeOctetString(_el);
                },
                date: (_el: asn1.ASN1Element): void => {
                    date = __utils._decodeGeneralizedTime(_el);
                },
                other: (_el: asn1.ASN1Element): void => {
                    other = _decode_OtherKeyAttribute(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KEKIdentifier,
                _extension_additions_list_spec_for_KEKIdentifier,
                _root_component_type_list_2_spec_for_KEKIdentifier,
                undefined
            );
            return new KEKIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                keyIdentifier,
                date,
                other
            );
        };
    }
    return _cached_decoder_for_KEKIdentifier(el);
}
export function _encode_KEKIdentifier(
    value: KEKIdentifier,
    elGetter: __utils.ASN1Encoder<KEKIdentifier>
) {
    if (!_cached_encoder_for_KEKIdentifier) {
        _cached_encoder_for_KEKIdentifier = function (
            value: KEKIdentifier,
            elGetter: __utils.ASN1Encoder<KEKIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.keyIdentifier,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.date === undefined
                            ? undefined
                            : __utils._encodeGeneralizedTime(
                                  value.date,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.other === undefined
                            ? undefined
                            : _encode_OtherKeyAttribute(
                                  value.other,
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
    return _cached_encoder_for_KEKIdentifier(value, elGetter);
}

export class KEKRecipientInfo {
    constructor(
        readonly version: CMSVersion,
        readonly kekid: KEKIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KEKRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "kekid",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KEKRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KEKRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KEKRecipientInfo: __utils.ASN1Decoder<
    KEKRecipientInfo
> | null = null;
let _cached_encoder_for_KEKRecipientInfo: __utils.ASN1Encoder<
    KEKRecipientInfo
> | null = null;
export function _decode_KEKRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KEKRecipientInfo) {
        _cached_decoder_for_KEKRecipientInfo = function (
            el: asn1.ASN1Element
        ): KEKRecipientInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "KEKRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "kekid";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: CMSVersion;
            let kekid!: KEKIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_CMSVersion(sequence[0]);
            kekid = _decode_KEKIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            // TODO: Validate values.
            return new KEKRecipientInfo(
                version,
                kekid,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KEKRecipientInfo(el);
}
export function _encode_KEKRecipientInfo(
    value: KEKRecipientInfo,
    elGetter: __utils.ASN1Encoder<KEKRecipientInfo>
) {
    if (!_cached_encoder_for_KEKRecipientInfo) {
        _cached_encoder_for_KEKRecipientInfo = function (
            value: KEKRecipientInfo,
            elGetter: __utils.ASN1Encoder<KEKRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_KEKIdentifier(
                            value.kekid,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
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
    return _cached_encoder_for_KEKRecipientInfo(value, elGetter);
}

export type RecipientInfo =
    | { ktri: KeyTransRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kari: KeyAgreeRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kekri: KEKRecipientInfo } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_RecipientInfo: __utils.ASN1Decoder<
    RecipientInfo
> | null = null;
let _cached_encoder_for_RecipientInfo: __utils.ASN1Encoder<
    RecipientInfo
> | null = null;
export function _decode_RecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RecipientInfo) {
        _cached_decoder_for_RecipientInfo = __utils._decode_inextensible_choice<
            RecipientInfo
        >({
            "UNIVERSAL 16": ["ktri", _decode_KeyTransRecipientInfo],
            "CONTEXT 1": [
                "kari",
                __utils._decode_implicit<KeyAgreeRecipientInfo>(
                    () => _decode_KeyAgreeRecipientInfo
                ),
            ],
            "CONTEXT 2": [
                "kekri",
                __utils._decode_implicit<KEKRecipientInfo>(
                    () => _decode_KEKRecipientInfo
                ),
            ],
        });
    }
    return _cached_decoder_for_RecipientInfo(el);
}
export function _encode_RecipientInfo(
    value: RecipientInfo,
    elGetter: __utils.ASN1Encoder<RecipientInfo>
) {
    if (!_cached_encoder_for_RecipientInfo) {
        _cached_encoder_for_RecipientInfo = __utils._encode_choice<
            RecipientInfo
        >(
            {
                ktri: _encode_KeyTransRecipientInfo,
                kari: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_KeyAgreeRecipientInfo,
                    __utils.BER
                ),
                kekri: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_KEKRecipientInfo,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}

export type RecipientInfos = RecipientInfo[]; // SetOfType
let _cached_decoder_for_RecipientInfos: __utils.ASN1Decoder<
    RecipientInfos
> | null = null;
let _cached_encoder_for_RecipientInfos: __utils.ASN1Encoder<
    RecipientInfos
> | null = null;
export function _decode_RecipientInfos(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RecipientInfos) {
        _cached_decoder_for_RecipientInfos = __utils._decodeSetOf<
            RecipientInfo
        >(() => _decode_RecipientInfo);
    }
    return _cached_decoder_for_RecipientInfos(el);
}
export function _encode_RecipientInfos(
    value: RecipientInfos,
    elGetter: __utils.ASN1Encoder<RecipientInfos>
) {
    if (!_cached_encoder_for_RecipientInfos) {
        _cached_encoder_for_RecipientInfos = __utils._encodeSetOf<
            RecipientInfo
        >(() => _encode_RecipientInfo, __utils.BER);
    }
    return _cached_encoder_for_RecipientInfos(value, elGetter);
}

export type ContentEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_ContentEncryptionAlgorithmIdentifier: __utils.ASN1Decoder<
    ContentEncryptionAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_ContentEncryptionAlgorithmIdentifier: __utils.ASN1Encoder<
    ContentEncryptionAlgorithmIdentifier
> | null = null;
export function _decode_ContentEncryptionAlgorithmIdentifier(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ContentEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_ContentEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ContentEncryptionAlgorithmIdentifier(el);
}
export function _encode_ContentEncryptionAlgorithmIdentifier(
    value: ContentEncryptionAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<ContentEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ContentEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_ContentEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ContentEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

export type EncryptedContent = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedContent: __utils.ASN1Decoder<
    EncryptedContent
> | null = null;
let _cached_encoder_for_EncryptedContent: __utils.ASN1Encoder<
    EncryptedContent
> | null = null;
export function _decode_EncryptedContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedContent) {
        _cached_decoder_for_EncryptedContent = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedContent(el);
}
export function _encode_EncryptedContent(
    value: EncryptedContent,
    elGetter: __utils.ASN1Encoder<EncryptedContent>
) {
    if (!_cached_encoder_for_EncryptedContent) {
        _cached_encoder_for_EncryptedContent = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedContent(value, elGetter);
}

export class EncryptedContentInfo {
    constructor(
        readonly contentType: ContentType,
        readonly contentEncryptionAlgorithm: ContentEncryptionAlgorithmIdentifier,
        readonly encryptedContent: asn1.OPTIONAL<EncryptedContent>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContent",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedContentInfo: __utils.ASN1Decoder<
    EncryptedContentInfo
> | null = null;
let _cached_encoder_for_EncryptedContentInfo: __utils.ASN1Encoder<
    EncryptedContentInfo
> | null = null;
export function _decode_EncryptedContentInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedContentInfo) {
        _cached_decoder_for_EncryptedContentInfo = function (
            el: asn1.ASN1Element
        ): EncryptedContentInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contentType!: ContentType;
            let contentEncryptionAlgorithm!: ContentEncryptionAlgorithmIdentifier;
            let encryptedContent: asn1.OPTIONAL<EncryptedContent>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                contentType: (_el: asn1.ASN1Element): void => {
                    contentType = _decode_ContentType(_el);
                },
                contentEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
                    contentEncryptionAlgorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedContent: (_el: asn1.ASN1Element): void => {
                    encryptedContent = __utils._decode_implicit<
                        EncryptedContent
                    >(() => _decode_EncryptedContent)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedContentInfo,
                _extension_additions_list_spec_for_EncryptedContentInfo,
                _root_component_type_list_2_spec_for_EncryptedContentInfo,
                undefined
            );
            return new EncryptedContentInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                contentType,
                contentEncryptionAlgorithm,
                encryptedContent
            );
        };
    }
    return _cached_decoder_for_EncryptedContentInfo(el);
}
export function _encode_EncryptedContentInfo(
    value: EncryptedContentInfo,
    elGetter: __utils.ASN1Encoder<EncryptedContentInfo>
) {
    if (!_cached_encoder_for_EncryptedContentInfo) {
        _cached_encoder_for_EncryptedContentInfo = function (
            value: EncryptedContentInfo,
            elGetter: __utils.ASN1Encoder<EncryptedContentInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ContentType(
                            value.contentType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ContentEncryptionAlgorithmIdentifier(
                            value.contentEncryptionAlgorithm,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.encryptedContent === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_EncryptedContent,
                                  __utils.BER
                              )(value.encryptedContent, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}

export type UnprotectedAttributes = Attribute[]; // SetOfType
let _cached_decoder_for_UnprotectedAttributes: __utils.ASN1Decoder<
    UnprotectedAttributes
> | null = null;
let _cached_encoder_for_UnprotectedAttributes: __utils.ASN1Encoder<
    UnprotectedAttributes
> | null = null;
export function _decode_UnprotectedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnprotectedAttributes) {
        _cached_decoder_for_UnprotectedAttributes = __utils._decodeSetOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_UnprotectedAttributes(el);
}
export function _encode_UnprotectedAttributes(
    value: UnprotectedAttributes,
    elGetter: __utils.ASN1Encoder<UnprotectedAttributes>
) {
    if (!_cached_encoder_for_UnprotectedAttributes) {
        _cached_encoder_for_UnprotectedAttributes = __utils._encodeSetOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_UnprotectedAttributes(value, elGetter);
}

export class EnvelopedData {
    constructor(
        readonly version: CMSVersion,
        readonly originatorInfo: asn1.OPTIONAL<OriginatorInfo>,
        readonly recipientInfos: RecipientInfos,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttrs: asn1.OPTIONAL<UnprotectedAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_EnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unprotectedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EnvelopedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EnvelopedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EnvelopedData: __utils.ASN1Decoder<
    EnvelopedData
> | null = null;
let _cached_encoder_for_EnvelopedData: __utils.ASN1Encoder<
    EnvelopedData
> | null = null;
export function _decode_EnvelopedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EnvelopedData) {
        _cached_decoder_for_EnvelopedData = function (
            el: asn1.ASN1Element
        ): EnvelopedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttrs: asn1.OPTIONAL<UnprotectedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                originatorInfo: (_el: asn1.ASN1Element): void => {
                    originatorInfo = __utils._decode_implicit<OriginatorInfo>(
                        () => _decode_OriginatorInfo
                    )(_el);
                },
                recipientInfos: (_el: asn1.ASN1Element): void => {
                    recipientInfos = _decode_RecipientInfos(_el);
                },
                encryptedContentInfo: (_el: asn1.ASN1Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttrs: (_el: asn1.ASN1Element): void => {
                    unprotectedAttrs = __utils._decode_implicit<
                        UnprotectedAttributes
                    >(() => _decode_UnprotectedAttributes)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EnvelopedData,
                _extension_additions_list_spec_for_EnvelopedData,
                _root_component_type_list_2_spec_for_EnvelopedData,
                undefined
            );
            return new EnvelopedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                originatorInfo,
                recipientInfos,
                encryptedContentInfo,
                unprotectedAttrs
            );
        };
    }
    return _cached_decoder_for_EnvelopedData(el);
}
export function _encode_EnvelopedData(
    value: EnvelopedData,
    elGetter: __utils.ASN1Encoder<EnvelopedData>
) {
    if (!_cached_encoder_for_EnvelopedData) {
        _cached_encoder_for_EnvelopedData = function (
            value: EnvelopedData,
            elGetter: __utils.ASN1Encoder<EnvelopedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  __utils.BER
                              )(value.originatorInfo, __utils.BER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_UnprotectedAttributes,
                                  __utils.BER
                              )(value.unprotectedAttrs, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EnvelopedData(value, elGetter);
}

export type Digest = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Digest: __utils.ASN1Decoder<Digest> | null = null;
let _cached_encoder_for_Digest: __utils.ASN1Encoder<Digest> | null = null;
export function _decode_Digest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Digest) {
        _cached_decoder_for_Digest = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Digest(el);
}
export function _encode_Digest(
    value: Digest,
    elGetter: __utils.ASN1Encoder<Digest>
) {
    if (!_cached_encoder_for_Digest) {
        _cached_encoder_for_Digest = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Digest(value, elGetter);
}

export class DigestedData {
    constructor(
        readonly version: CMSVersion,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly digest: Digest
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encapContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DigestedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DigestedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DigestedData: __utils.ASN1Decoder<
    DigestedData
> | null = null;
let _cached_encoder_for_DigestedData: __utils.ASN1Encoder<
    DigestedData
> | null = null;
export function _decode_DigestedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestedData) {
        _cached_decoder_for_DigestedData = function (
            el: asn1.ASN1Element
        ): DigestedData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "DigestedData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "digestAlgorithm";
            sequence[2].name = "encapContentInfo";
            sequence[3].name = "digest";
            let version!: CMSVersion;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let encapContentInfo!: EncapsulatedContentInfo;
            let digest!: Digest;
            version = _decode_CMSVersion(sequence[0]);
            digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[1]);
            encapContentInfo = _decode_EncapsulatedContentInfo(sequence[2]);
            digest = _decode_Digest(sequence[3]);
            // TODO: Validate values.
            return new DigestedData(
                version,
                digestAlgorithm,
                encapContentInfo,
                digest
            );
        };
    }
    return _cached_decoder_for_DigestedData(el);
}
export function _encode_DigestedData(
    value: DigestedData,
    elGetter: __utils.ASN1Encoder<DigestedData>
) {
    if (!_cached_encoder_for_DigestedData) {
        _cached_encoder_for_DigestedData = function (
            value: DigestedData,
            elGetter: __utils.ASN1Encoder<DigestedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Digest(
                            value.digest,
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
    return _cached_encoder_for_DigestedData(value, elGetter);
}

export class EncryptedData {
    constructor(
        readonly version: CMSVersion,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttrs: asn1.OPTIONAL<UnprotectedAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unprotectedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedData: __utils.ASN1Decoder<
    EncryptedData
> | null = null;
let _cached_encoder_for_EncryptedData: __utils.ASN1Encoder<
    EncryptedData
> | null = null;
export function _decode_EncryptedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedData) {
        _cached_decoder_for_EncryptedData = function (
            el: asn1.ASN1Element
        ): EncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttrs: asn1.OPTIONAL<UnprotectedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                encryptedContentInfo: (_el: asn1.ASN1Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttrs: (_el: asn1.ASN1Element): void => {
                    unprotectedAttrs = __utils._decode_implicit<
                        UnprotectedAttributes
                    >(() => _decode_UnprotectedAttributes)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedData,
                _extension_additions_list_spec_for_EncryptedData,
                _root_component_type_list_2_spec_for_EncryptedData,
                undefined
            );
            return new EncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                encryptedContentInfo,
                unprotectedAttrs
            );
        };
    }
    return _cached_decoder_for_EncryptedData(el);
}
export function _encode_EncryptedData(
    value: EncryptedData,
    elGetter: __utils.ASN1Encoder<EncryptedData>
) {
    if (!_cached_encoder_for_EncryptedData) {
        _cached_encoder_for_EncryptedData = function (
            value: EncryptedData,
            elGetter: __utils.ASN1Encoder<EncryptedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_UnprotectedAttributes,
                                  __utils.BER
                              )(value.unprotectedAttrs, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}

export type MessageAuthenticationCodeAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_MessageAuthenticationCodeAlgorithm: __utils.ASN1Decoder<
    MessageAuthenticationCodeAlgorithm
> | null = null;
let _cached_encoder_for_MessageAuthenticationCodeAlgorithm: __utils.ASN1Encoder<
    MessageAuthenticationCodeAlgorithm
> | null = null;
export function _decode_MessageAuthenticationCodeAlgorithm(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_MessageAuthenticationCodeAlgorithm) {
        _cached_decoder_for_MessageAuthenticationCodeAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageAuthenticationCodeAlgorithm(el);
}
export function _encode_MessageAuthenticationCodeAlgorithm(
    value: MessageAuthenticationCodeAlgorithm,
    elGetter: __utils.ASN1Encoder<MessageAuthenticationCodeAlgorithm>
) {
    if (!_cached_encoder_for_MessageAuthenticationCodeAlgorithm) {
        _cached_encoder_for_MessageAuthenticationCodeAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageAuthenticationCodeAlgorithm(
        value,
        elGetter
    );
}

export type AuthAttributes = Attribute[]; // SetOfType
let _cached_decoder_for_AuthAttributes: __utils.ASN1Decoder<
    AuthAttributes
> | null = null;
let _cached_encoder_for_AuthAttributes: __utils.ASN1Encoder<
    AuthAttributes
> | null = null;
export function _decode_AuthAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthAttributes) {
        _cached_decoder_for_AuthAttributes = __utils._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_AuthAttributes(el);
}
export function _encode_AuthAttributes(
    value: AuthAttributes,
    elGetter: __utils.ASN1Encoder<AuthAttributes>
) {
    if (!_cached_encoder_for_AuthAttributes) {
        _cached_encoder_for_AuthAttributes = __utils._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            __utils.BER
        );
    }
    return _cached_encoder_for_AuthAttributes(value, elGetter);
}

export type MessageAuthenticationCode = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_MessageAuthenticationCode: __utils.ASN1Decoder<
    MessageAuthenticationCode
> | null = null;
let _cached_encoder_for_MessageAuthenticationCode: __utils.ASN1Encoder<
    MessageAuthenticationCode
> | null = null;
export function _decode_MessageAuthenticationCode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MessageAuthenticationCode) {
        _cached_decoder_for_MessageAuthenticationCode =
            __utils._decodeOctetString;
    }
    return _cached_decoder_for_MessageAuthenticationCode(el);
}
export function _encode_MessageAuthenticationCode(
    value: MessageAuthenticationCode,
    elGetter: __utils.ASN1Encoder<MessageAuthenticationCode>
) {
    if (!_cached_encoder_for_MessageAuthenticationCode) {
        _cached_encoder_for_MessageAuthenticationCode =
            __utils._encodeOctetString;
    }
    return _cached_encoder_for_MessageAuthenticationCode(value, elGetter);
}

export class AuthenticatedData {
    constructor(
        readonly version: CMSVersion,
        readonly originatorInfo: asn1.OPTIONAL<OriginatorInfo>,
        readonly recipientInfos: RecipientInfos,
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithm,
        readonly digestAlgorithm: asn1.OPTIONAL<DigestAlgorithmIdentifier>,
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly authenticatedAttributes: asn1.OPTIONAL<AuthAttributes>,
        readonly mac: MessageAuthenticationCode,
        readonly unauthenticatedAttributes: asn1.OPTIONAL<UnauthAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "macAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encapContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mac",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unauthenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AuthenticatedData: __utils.ASN1Decoder<
    AuthenticatedData
> | null = null;
let _cached_encoder_for_AuthenticatedData: __utils.ASN1Encoder<
    AuthenticatedData
> | null = null;
export function _decode_AuthenticatedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthenticatedData) {
        _cached_decoder_for_AuthenticatedData = function (
            el: asn1.ASN1Element
        ): AuthenticatedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let macAlgorithm!: MessageAuthenticationCodeAlgorithm;
            let digestAlgorithm: asn1.OPTIONAL<DigestAlgorithmIdentifier>;
            let encapContentInfo!: EncapsulatedContentInfo;
            let authenticatedAttributes: asn1.OPTIONAL<AuthAttributes>;
            let mac!: MessageAuthenticationCode;
            let unauthenticatedAttributes: asn1.OPTIONAL<UnauthAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                originatorInfo: (_el: asn1.ASN1Element): void => {
                    originatorInfo = __utils._decode_implicit<OriginatorInfo>(
                        () => _decode_OriginatorInfo
                    )(_el);
                },
                recipientInfos: (_el: asn1.ASN1Element): void => {
                    recipientInfos = _decode_RecipientInfos(_el);
                },
                macAlgorithm: (_el: asn1.ASN1Element): void => {
                    macAlgorithm = _decode_MessageAuthenticationCodeAlgorithm(
                        _el
                    );
                },
                digestAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestAlgorithm = __utils._decode_implicit<
                        DigestAlgorithmIdentifier
                    >(() => _decode_DigestAlgorithmIdentifier)(_el);
                },
                encapContentInfo: (_el: asn1.ASN1Element): void => {
                    encapContentInfo = _decode_EncapsulatedContentInfo(_el);
                },
                authenticatedAttributes: (_el: asn1.ASN1Element): void => {
                    authenticatedAttributes = __utils._decode_implicit<
                        AuthAttributes
                    >(() => _decode_AuthAttributes)(_el);
                },
                mac: (_el: asn1.ASN1Element): void => {
                    mac = _decode_MessageAuthenticationCode(_el);
                },
                unauthenticatedAttributes: (_el: asn1.ASN1Element): void => {
                    unauthenticatedAttributes = __utils._decode_implicit<
                        UnauthAttributes
                    >(() => _decode_UnauthAttributes)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthenticatedData,
                _extension_additions_list_spec_for_AuthenticatedData,
                _root_component_type_list_2_spec_for_AuthenticatedData,
                undefined
            );
            return new AuthenticatedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                originatorInfo,
                recipientInfos,
                macAlgorithm,
                digestAlgorithm,
                encapContentInfo,
                authenticatedAttributes,
                mac,
                unauthenticatedAttributes
            );
        };
    }
    return _cached_decoder_for_AuthenticatedData(el);
}
export function _encode_AuthenticatedData(
    value: AuthenticatedData,
    elGetter: __utils.ASN1Encoder<AuthenticatedData>
) {
    if (!_cached_encoder_for_AuthenticatedData) {
        _cached_encoder_for_AuthenticatedData = function (
            value: AuthenticatedData,
            elGetter: __utils.ASN1Encoder<AuthenticatedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  __utils.BER
                              )(value.originatorInfo, __utils.BER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithm(
                            value.macAlgorithm,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.digestAlgorithm === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_DigestAlgorithmIdentifier,
                                  __utils.BER
                              )(value.digestAlgorithm, __utils.BER),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.authenticatedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_AuthAttributes,
                                  __utils.BER
                              )(value.authenticatedAttributes, __utils.BER),
                        /* REQUIRED   */ _encode_MessageAuthenticationCode(
                            value.mac,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.unauthenticatedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_UnauthAttributes,
                                  __utils.BER
                              )(value.unauthenticatedAttributes, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AuthenticatedData(value, elGetter);
}

// TODO: ObjectClassAssignment: OTHER-KEY-ATTRIBUTE

// TODO: ObjectSetAssignment: OtherKeyAttributeTable

export type MessageDigest = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_MessageDigest: __utils.ASN1Decoder<
    MessageDigest
> | null = null;
let _cached_encoder_for_MessageDigest: __utils.ASN1Encoder<
    MessageDigest
> | null = null;
export function _decode_MessageDigest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MessageDigest) {
        _cached_decoder_for_MessageDigest = __utils._decodeOctetString;
    }
    return _cached_decoder_for_MessageDigest(el);
}
export function _encode_MessageDigest(
    value: MessageDigest,
    elGetter: __utils.ASN1Encoder<MessageDigest>
) {
    if (!_cached_encoder_for_MessageDigest) {
        _cached_encoder_for_MessageDigest = __utils._encodeOctetString;
    }
    return _cached_encoder_for_MessageDigest(value, elGetter);
}

export type Time =
    | { utcTime: asn1.UTCTime } /* CHOICE_ALT_ROOT */
    | { generalTime: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Time: __utils.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: __utils.ASN1Encoder<Time> | null = null;
export function _decode_Time(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = __utils._decode_inextensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", __utils._decodeUTCTime],
            "UNIVERSAL 24": ["generalTime", __utils._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
export function _encode_Time(value: Time, elGetter: __utils.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = __utils._encode_choice<Time>(
            {
                utcTime: __utils._encodeUTCTime,
                generalTime: __utils._encodeGeneralizedTime,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

export type SigningTime = Time; // DefinedType
let _cached_decoder_for_SigningTime: __utils.ASN1Decoder<
    SigningTime
> | null = null;
let _cached_encoder_for_SigningTime: __utils.ASN1Encoder<
    SigningTime
> | null = null;
export function _decode_SigningTime(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigningTime) {
        _cached_decoder_for_SigningTime = _decode_Time;
    }
    return _cached_decoder_for_SigningTime(el);
}
export function _encode_SigningTime(
    value: SigningTime,
    elGetter: __utils.ASN1Encoder<SigningTime>
) {
    if (!_cached_encoder_for_SigningTime) {
        _cached_encoder_for_SigningTime = _encode_Time;
    }
    return _cached_encoder_for_SigningTime(value, elGetter);
}

export type Countersignature = SignerInfo; // DefinedType
let _cached_decoder_for_Countersignature: __utils.ASN1Decoder<
    Countersignature
> | null = null;
let _cached_encoder_for_Countersignature: __utils.ASN1Encoder<
    Countersignature
> | null = null;
export function _decode_Countersignature(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Countersignature) {
        _cached_decoder_for_Countersignature = _decode_SignerInfo;
    }
    return _cached_decoder_for_Countersignature(el);
}
export function _encode_Countersignature(
    value: Countersignature,
    elGetter: __utils.ASN1Encoder<Countersignature>
) {
    if (!_cached_encoder_for_Countersignature) {
        _cached_encoder_for_Countersignature = _encode_SignerInfo;
    }
    return _cached_encoder_for_Countersignature(value, elGetter);
}

export const sha_1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

export const md5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* digestAlgorithm */ 2,
    5,
]);

export const id_dsa_with_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* x9-57 */ 10040,
        /* x9cm */ 4,
        3,
    ]
);

export const rsaEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-1 */ 1,
    1,
]);

export const dh_public_number: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-x942 */ 10046,
        /* number-type */ 2,
        1,
    ]
);

export const id_alg_ESDH: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    5,
]);

export const id_alg_CMS3DESwrap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* alg */ 3,
        6,
    ]
);

export const id_alg_CMSRC2wrap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* alg */ 3,
        7,
    ]
);

export const des_ede3_cbc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* encryptionAlgorithm */ 3,
    7,
]);

export const rc2_cbc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* encryptionAlgorithm */ 3,
    2,
]);

export const hMAC_SHA1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    8,
    1,
    2,
]);

export type KeyWrapAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_KeyWrapAlgorithm: __utils.ASN1Decoder<
    KeyWrapAlgorithm
> | null = null;
let _cached_encoder_for_KeyWrapAlgorithm: __utils.ASN1Encoder<
    KeyWrapAlgorithm
> | null = null;
export function _decode_KeyWrapAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyWrapAlgorithm) {
        _cached_decoder_for_KeyWrapAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyWrapAlgorithm(el);
}
export function _encode_KeyWrapAlgorithm(
    value: KeyWrapAlgorithm,
    elGetter: __utils.ASN1Encoder<KeyWrapAlgorithm>
) {
    if (!_cached_encoder_for_KeyWrapAlgorithm) {
        _cached_encoder_for_KeyWrapAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyWrapAlgorithm(value, elGetter);
}

export type RC2ParameterVersion = asn1.INTEGER;
let _cached_decoder_for_RC2ParameterVersion: __utils.ASN1Decoder<
    RC2ParameterVersion
> | null = null;
let _cached_encoder_for_RC2ParameterVersion: __utils.ASN1Encoder<
    RC2ParameterVersion
> | null = null;
export function _decode_RC2ParameterVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2ParameterVersion) {
        _cached_decoder_for_RC2ParameterVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_RC2ParameterVersion(el);
}
export function _encode_RC2ParameterVersion(
    value: RC2ParameterVersion,
    elGetter: __utils.ASN1Encoder<RC2ParameterVersion>
) {
    if (!_cached_encoder_for_RC2ParameterVersion) {
        _cached_encoder_for_RC2ParameterVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_RC2ParameterVersion(value, elGetter);
}

export type RC2wrapParameter = RC2ParameterVersion; // DefinedType
let _cached_decoder_for_RC2wrapParameter: __utils.ASN1Decoder<
    RC2wrapParameter
> | null = null;
let _cached_encoder_for_RC2wrapParameter: __utils.ASN1Encoder<
    RC2wrapParameter
> | null = null;
export function _decode_RC2wrapParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2wrapParameter) {
        _cached_decoder_for_RC2wrapParameter = _decode_RC2ParameterVersion;
    }
    return _cached_decoder_for_RC2wrapParameter(el);
}
export function _encode_RC2wrapParameter(
    value: RC2wrapParameter,
    elGetter: __utils.ASN1Encoder<RC2wrapParameter>
) {
    if (!_cached_encoder_for_RC2wrapParameter) {
        _cached_encoder_for_RC2wrapParameter = _encode_RC2ParameterVersion;
    }
    return _cached_encoder_for_RC2wrapParameter(value, elGetter);
}

export type IV = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_IV: __utils.ASN1Decoder<IV> | null = null;
let _cached_encoder_for_IV: __utils.ASN1Encoder<IV> | null = null;
export function _decode_IV(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IV) {
        _cached_decoder_for_IV = __utils._decodeOctetString;
    }
    return _cached_decoder_for_IV(el);
}
export function _encode_IV(value: IV, elGetter: __utils.ASN1Encoder<IV>) {
    if (!_cached_encoder_for_IV) {
        _cached_encoder_for_IV = __utils._encodeOctetString;
    }
    return _cached_encoder_for_IV(value, elGetter);
}

export type CBCParameter = IV; // DefinedType
let _cached_decoder_for_CBCParameter: __utils.ASN1Decoder<
    CBCParameter
> | null = null;
let _cached_encoder_for_CBCParameter: __utils.ASN1Encoder<
    CBCParameter
> | null = null;
export function _decode_CBCParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CBCParameter) {
        _cached_decoder_for_CBCParameter = _decode_IV;
    }
    return _cached_decoder_for_CBCParameter(el);
}
export function _encode_CBCParameter(
    value: CBCParameter,
    elGetter: __utils.ASN1Encoder<CBCParameter>
) {
    if (!_cached_encoder_for_CBCParameter) {
        _cached_encoder_for_CBCParameter = _encode_IV;
    }
    return _cached_encoder_for_CBCParameter(value, elGetter);
}

export class RC2CBCParameter {
    constructor(
        readonly rc2ParameterVersion: asn1.INTEGER,
        readonly iv: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_RC2CBCParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rc2ParameterVersion",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iv",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RC2CBCParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RC2CBCParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RC2CBCParameter: __utils.ASN1Decoder<
    RC2CBCParameter
> | null = null;
let _cached_encoder_for_RC2CBCParameter: __utils.ASN1Encoder<
    RC2CBCParameter
> | null = null;
export function _decode_RC2CBCParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2CBCParameter) {
        _cached_decoder_for_RC2CBCParameter = function (
            el: asn1.ASN1Element
        ): RC2CBCParameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "RC2CBCParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "rc2ParameterVersion";
            sequence[1].name = "iv";
            let rc2ParameterVersion!: asn1.INTEGER;
            let iv!: asn1.OCTET_STRING;
            rc2ParameterVersion = __utils._decodeInteger(sequence[0]);
            iv = __utils._decodeOctetString(sequence[1]);
            // TODO: Validate values.
            return new RC2CBCParameter(rc2ParameterVersion, iv);
        };
    }
    return _cached_decoder_for_RC2CBCParameter(el);
}
export function _encode_RC2CBCParameter(
    value: RC2CBCParameter,
    elGetter: __utils.ASN1Encoder<RC2CBCParameter>
) {
    if (!_cached_encoder_for_RC2CBCParameter) {
        _cached_encoder_for_RC2CBCParameter = function (
            value: RC2CBCParameter,
            elGetter: __utils.ASN1Encoder<RC2CBCParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.rc2ParameterVersion,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.iv,
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
    return _cached_encoder_for_RC2CBCParameter(value, elGetter);
}

export const id_ct_contentInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* ct */ 1,
        6,
    ]
);

export const id_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    1,
]);

export const id_signedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

export const id_envelopedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs7 */ 7,
        3,
    ]
);

export const id_digestedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs7 */ 7,
        5,
    ]
);

export const id_encryptedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs7 */ 7,
        6,
    ]
);

export const id_ct_authData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* ct */ 1,
        2,
    ]
);

export const id_contentType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        3,
    ]
);

export const id_messageDigest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        4,
    ]
);

export const id_signingTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        5,
    ]
);

export const id_countersignature: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        6,
    ]
);

/* END_MODULE CryptographicMessageSyntax */

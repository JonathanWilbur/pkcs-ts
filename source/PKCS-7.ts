/*
    BEGIN_MODULE PKCS7
    OID: iso.member-body.usa.rsadsi.pkcs.7.module
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
    HASH,
    SIGNED,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "x500-ts/dist/node/AuthenticationFramework";

import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "x500-ts/dist/node/AttributeCertificateDefinitions";
import {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "x500-ts/dist/node/InformationFramework";
import * as __utils from "./__utils";
import { iso } from "./__utils";

// TODO: ObjectSetAssignment: PKCS7ContentTable

// TODO: ObjectClassAssignment: PKCS7-CONTENT-TYPE

// TODO: ObjectAssignment: data

export type Data = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Data: __utils.ASN1Decoder<Data> | null = null;
let _cached_encoder_for_Data: __utils.ASN1Encoder<Data> | null = null;
export function _decode_Data(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Data) {
        _cached_decoder_for_Data = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Data(el);
}
export function _encode_Data(value: Data, elGetter: __utils.ASN1Encoder<Data>) {
    if (!_cached_encoder_for_Data) {
        _cached_encoder_for_Data = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Data(value, elGetter);
}

// TODO: ObjectAssignment: signed-data

export type Version = asn1.INTEGER;
let _cached_decoder_for_Version: __utils.ASN1Decoder<Version> | null = null;
let _cached_encoder_for_Version: __utils.ASN1Encoder<Version> | null = null;
export function _decode_Version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Version) {
        _cached_decoder_for_Version = __utils._decodeInteger;
    }
    return _cached_decoder_for_Version(el);
}
export function _encode_Version(
    value: Version,
    elGetter: __utils.ASN1Encoder<Version>
) {
    if (!_cached_encoder_for_Version) {
        _cached_encoder_for_Version = __utils._encodeInteger;
    }
    return _cached_encoder_for_Version(value, elGetter);
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
        >(() => _encode_DigestAlgorithmIdentifier, __utils.DER);
    }
    return _cached_encoder_for_DigestAlgorithmIdentifiers(value, elGetter);
}

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
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeAny,
                            __utils.DER
                        )(value.pkcs7_content, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_ContentInfo(value, elGetter);
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
            __utils.DER
        );
    }
    return _cached_encoder_for_Attributes(value, elGetter);
}

export class ExtendedCertificateInfo {
    constructor(
        readonly version: Version,
        readonly certificate: Certificate,
        readonly attributes: Attributes
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
            let version!: Version;
            let certificate!: Certificate;
            let attributes!: Attributes;
            version = _decode_Version(sequence[0]);
            certificate = _decode_Certificate(sequence[1]);
            attributes = _decode_Attributes(sequence[2]);
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_Certificate(
                            value.certificate,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_Attributes(
                            value.attributes,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_ExtendedCertificateInfo(value, elGetter);
}

export type ExtendedCertificate = SIGNED<ExtendedCertificateInfo>; // DefinedType
let _cached_decoder_for_ExtendedCertificate: __utils.ASN1Decoder<
    ExtendedCertificate
> | null = null;
let _cached_encoder_for_ExtendedCertificate: __utils.ASN1Encoder<
    ExtendedCertificate
> | null = null;
export function _decode_ExtendedCertificate(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtendedCertificate) {
        _cached_decoder_for_ExtendedCertificate = _get_decoder_for_SIGNED<
            ExtendedCertificateInfo
        >(_decode_ExtendedCertificateInfo);
    }
    return _cached_decoder_for_ExtendedCertificate(el);
}
export function _encode_ExtendedCertificate(
    value: ExtendedCertificate,
    elGetter: __utils.ASN1Encoder<ExtendedCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificate) {
        _cached_encoder_for_ExtendedCertificate = _get_encoder_for_SIGNED<
            ExtendedCertificateInfo
        >(_encode_ExtendedCertificateInfo);
    }
    return _cached_encoder_for_ExtendedCertificate(value, elGetter);
}

export type CertificateChoice =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { attributeCertificate: AttributeCertificate } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CertificateChoice: __utils.ASN1Decoder<
    CertificateChoice
> | null = null;
let _cached_encoder_for_CertificateChoice: __utils.ASN1Encoder<
    CertificateChoice
> | null = null;
export function _decode_CertificateChoice(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateChoice) {
        _cached_decoder_for_CertificateChoice = __utils._decode_inextensible_choice<
            CertificateChoice
        >({
            "UNIVERSAL 16": ["certificate", _decode_Certificate],
            "CONTEXT 0": [
                "extendedCertificate",
                __utils._decode_implicit<ExtendedCertificate>(
                    () => _decode_ExtendedCertificate
                ),
            ],
            "CONTEXT 1": [
                "attributeCertificate",
                __utils._decode_implicit<AttributeCertificate>(
                    () => _decode_AttributeCertificate
                ),
            ],
        });
    }
    return _cached_decoder_for_CertificateChoice(el);
}
export function _encode_CertificateChoice(
    value: CertificateChoice,
    elGetter: __utils.ASN1Encoder<CertificateChoice>
) {
    if (!_cached_encoder_for_CertificateChoice) {
        _cached_encoder_for_CertificateChoice = __utils._encode_choice<
            CertificateChoice
        >(
            {
                certificate: _encode_Certificate,
                extendedCertificate: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    __utils.DER
                ),
                attributeCertificate: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AttributeCertificate,
                    __utils.DER
                ),
            },
            __utils.DER
        );
    }
    return _cached_encoder_for_CertificateChoice(value, elGetter);
}

export type CertificateSet = CertificateChoice[]; // SetOfType
let _cached_decoder_for_CertificateSet: __utils.ASN1Decoder<
    CertificateSet
> | null = null;
let _cached_encoder_for_CertificateSet: __utils.ASN1Encoder<
    CertificateSet
> | null = null;
export function _decode_CertificateSet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateSet) {
        _cached_decoder_for_CertificateSet = __utils._decodeSetOf<
            CertificateChoice
        >(() => _decode_CertificateChoice);
    }
    return _cached_decoder_for_CertificateSet(el);
}
export function _encode_CertificateSet(
    value: CertificateSet,
    elGetter: __utils.ASN1Encoder<CertificateSet>
) {
    if (!_cached_encoder_for_CertificateSet) {
        _cached_encoder_for_CertificateSet = __utils._encodeSetOf<
            CertificateChoice
        >(() => _encode_CertificateChoice, __utils.DER);
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
        >(() => _encode_CertificateList, __utils.DER);
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
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serialNumber,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
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
            "CONTEXT 2": [
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
                    2,
                    () => _encode_SubjectKeyIdentifier,
                    __utils.DER
                ),
            },
            __utils.DER
        );
    }
    return _cached_encoder_for_SignerIdentifier(value, elGetter);
}

export type DigestEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_DigestEncryptionAlgorithmIdentifier: __utils.ASN1Decoder<
    DigestEncryptionAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_DigestEncryptionAlgorithmIdentifier: __utils.ASN1Encoder<
    DigestEncryptionAlgorithmIdentifier
> | null = null;
export function _decode_DigestEncryptionAlgorithmIdentifier(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_DigestEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_DigestEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestEncryptionAlgorithmIdentifier(el);
}
export function _encode_DigestEncryptionAlgorithmIdentifier(
    value: DigestEncryptionAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<DigestEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_DigestEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_DigestEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

export type ENCRYPTED = asn1.OCTET_STRING; // OctetStringType
export function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(
    _decode_ToBeEnciphered: __utils.ASN1Decoder<ToBeEnciphered>
) {
    return __utils._decodeOctetString;
}
export function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(
    _encode_ToBeEnciphered: __utils.ASN1Encoder<ToBeEnciphered>
) {
    return __utils._encodeOctetString;
}

export type DigestHashContent = { content: asn1.ASN1Element } | { authenticated_attributes: Attributes };

export type Digest = HASH<DigestHashContent>; // DefinedType
let _cached_decoder_for_Digest: __utils.ASN1Decoder<Digest> | null = null;
let _cached_encoder_for_Digest: __utils.ASN1Encoder<Digest> | null = null;
export function _decode_Digest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Digest) {
        _cached_decoder_for_Digest = _get_decoder_for_HASH<DigestHashContent>(
            __utils._decode_inextensible_choice<DigestHashContent>({
                "CONTEXT 1": [
                    "content",
                    __utils._decode_implicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    ),
                ],
                "CONTEXT 0": [
                    "authenticated_attributes",
                    __utils._decode_explicit<Attributes>(
                        () => _decode_Attributes
                    ),
                ],
            })
        );
    }
    return _cached_decoder_for_Digest(el);
}
export function _encode_Digest(
    value: Digest,
    elGetter: __utils.ASN1Encoder<Digest>
) {
    if (!_cached_encoder_for_Digest) {
        _cached_encoder_for_Digest = _get_encoder_for_HASH<DigestHashContent>(
            __utils._encode_choice<DigestHashContent>(
                {
                    content: __utils._encode_implicit(
                        asn1.ASN1TagClass.context,
                        1,
                        () => __utils._encodeAny,
                        __utils.DER
                    ),
                    authenticated_attributes: __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_Attributes,
                        __utils.DER
                    ),
                },
                __utils.DER
            )
        );
    }
    return _cached_encoder_for_Digest(value, elGetter);
}

export class DigestInfo {
    constructor(
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly digest: Digest
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DigestInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DigestInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DigestInfo: __utils.ASN1Decoder<
    DigestInfo
> | null = null;
let _cached_encoder_for_DigestInfo: __utils.ASN1Encoder<
    DigestInfo
> | null = null;
export function _decode_DigestInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestInfo) {
        _cached_decoder_for_DigestInfo = function (
            el: asn1.ASN1Element
        ): DigestInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "DigestInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "digestAlgorithm";
            sequence[1].name = "digest";
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let digest!: Digest;
            digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[0]);
            digest = _decode_Digest(sequence[1]);
            // TODO: Validate values.
            return new DigestInfo(digestAlgorithm, digest);
        };
    }
    return _cached_decoder_for_DigestInfo(el);
}
export function _encode_DigestInfo(
    value: DigestInfo,
    elGetter: __utils.ASN1Encoder<DigestInfo>
) {
    if (!_cached_encoder_for_DigestInfo) {
        _cached_encoder_for_DigestInfo = function (
            value: DigestInfo,
            elGetter: __utils.ASN1Encoder<DigestInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_Digest(
                            value.digest,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_DigestInfo(value, elGetter);
}

export type EncryptedDigest = ENCRYPTED; // DefinedType
let _cached_decoder_for_EncryptedDigest: __utils.ASN1Decoder<
    EncryptedDigest
> | null = null;
let _cached_encoder_for_EncryptedDigest: __utils.ASN1Encoder<
    EncryptedDigest
> | null = null;
export function _decode_EncryptedDigest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedDigest) {
        _cached_decoder_for_EncryptedDigest = _get_decoder_for_ENCRYPTED<
            DigestInfo
        >(_decode_DigestInfo);
    }
    return _cached_decoder_for_EncryptedDigest(el);
}
export function _encode_EncryptedDigest(
    value: EncryptedDigest,
    elGetter: __utils.ASN1Encoder<EncryptedDigest>
) {
    if (!_cached_encoder_for_EncryptedDigest) {
        _cached_encoder_for_EncryptedDigest = _get_encoder_for_ENCRYPTED<
            DigestInfo
        >(_encode_DigestInfo);
    }
    return _cached_encoder_for_EncryptedDigest(value, elGetter);
}

export class SignerInfo {
    constructor(
        readonly version: Version,
        readonly signerIdentifier: SignerIdentifier,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly authenticatedAttributes: asn1.OPTIONAL<Attributes>,
        readonly digestEncryptionAlgorithm: DigestEncryptionAlgorithmIdentifier,
        readonly encryptedDigest: EncryptedDigest,
        readonly unauthenticatedAttributes: asn1.OPTIONAL<Attributes>
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
        "signerIdentifier",
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
        "authenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedDigest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unauthenticatedAttributes",
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
            let version!: Version;
            let signerIdentifier!: SignerIdentifier;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let authenticatedAttributes: asn1.OPTIONAL<Attributes>;
            let digestEncryptionAlgorithm!: DigestEncryptionAlgorithmIdentifier;
            let encryptedDigest!: EncryptedDigest;
            let unauthenticatedAttributes: asn1.OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                signerIdentifier: (_el: asn1.ASN1Element): void => {
                    signerIdentifier = _decode_SignerIdentifier(_el);
                },
                digestAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
                },
                authenticatedAttributes: (_el: asn1.ASN1Element): void => {
                    authenticatedAttributes = __utils._decode_implicit<
                        Attributes
                    >(() => _decode_Attributes)(_el);
                },
                digestEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestEncryptionAlgorithm = _decode_DigestEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedDigest: (_el: asn1.ASN1Element): void => {
                    encryptedDigest = _decode_EncryptedDigest(_el);
                },
                unauthenticatedAttributes: (_el: asn1.ASN1Element): void => {
                    unauthenticatedAttributes = __utils._decode_implicit<
                        Attributes
                    >(() => _decode_Attributes)(_el);
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
                signerIdentifier,
                digestAlgorithm,
                authenticatedAttributes,
                digestEncryptionAlgorithm,
                encryptedDigest,
                unauthenticatedAttributes
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_SignerIdentifier(
                            value.signerIdentifier,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.authenticatedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_Attributes,
                                  __utils.DER
                              )(value.authenticatedAttributes, __utils.DER),
                        /* REQUIRED   */ _encode_DigestEncryptionAlgorithmIdentifier(
                            value.digestEncryptionAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedDigest(
                            value.encryptedDigest,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.unauthenticatedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  __utils.DER
                              )(value.unauthenticatedAttributes, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
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
            __utils.DER
        );
    }
    return _cached_encoder_for_SignerInfos(value, elGetter);
}

export class SignedData {
    constructor(
        readonly version: Version,
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        readonly contentInfo: ContentInfo,
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
        "contentInfo",
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
            let version!: Version;
            let digestAlgorithms!: DigestAlgorithmIdentifiers;
            let contentInfo!: ContentInfo;
            let certificates: asn1.OPTIONAL<CertificateSet>;
            let crls: asn1.OPTIONAL<CertificateRevocationLists>;
            let signerInfos!: SignerInfos;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                digestAlgorithms: (_el: asn1.ASN1Element): void => {
                    digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
                },
                contentInfo: (_el: asn1.ASN1Element): void => {
                    contentInfo = _decode_ContentInfo(_el);
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
                contentInfo,
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                            value.digestAlgorithms,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.contentInfo,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  __utils.DER
                              )(value.certificates, __utils.DER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  __utils.DER
                              )(value.crls, __utils.DER),
                        /* REQUIRED   */ _encode_SignerInfos(
                            value.signerInfos,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_SignedData(value, elGetter);
}

// TODO: ObjectAssignment: enveloped-data

export class OriginatorInfo {
    constructor(
        readonly certificates: asn1.OPTIONAL<CertificateSet>,
        readonly crls: asn1.OPTIONAL<CertificateRevocationLists>
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [
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
            let certificates: asn1.OPTIONAL<CertificateSet>;
            let crls: asn1.OPTIONAL<CertificateRevocationLists>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
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
                certificates,
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
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  __utils.DER
                              )(value.certificates, __utils.DER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  __utils.DER
                              )(value.crls, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
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
                    __utils.DER
                ),
            },
            __utils.DER
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

export class KeyTransportRecipientInfo {
    constructor(
        readonly version: Version,
        readonly recipientIdentifier: RecipientIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyTransportRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientIdentifier",
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
export const _root_component_type_list_2_spec_for_KeyTransportRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyTransportRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyTransportRecipientInfo: __utils.ASN1Decoder<
    KeyTransportRecipientInfo
> | null = null;
let _cached_encoder_for_KeyTransportRecipientInfo: __utils.ASN1Encoder<
    KeyTransportRecipientInfo
> | null = null;
export function _decode_KeyTransportRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyTransportRecipientInfo) {
        _cached_decoder_for_KeyTransportRecipientInfo = function (
            el: asn1.ASN1Element
        ): KeyTransportRecipientInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "KeyTransportRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "recipientIdentifier";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: Version;
            let recipientIdentifier!: RecipientIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_Version(sequence[0]);
            recipientIdentifier = _decode_RecipientIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            // TODO: Validate values.
            return new KeyTransportRecipientInfo(
                version,
                recipientIdentifier,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KeyTransportRecipientInfo(el);
}
export function _encode_KeyTransportRecipientInfo(
    value: KeyTransportRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyTransportRecipientInfo>
) {
    if (!_cached_encoder_for_KeyTransportRecipientInfo) {
        _cached_encoder_for_KeyTransportRecipientInfo = function (
            value: KeyTransportRecipientInfo,
            elGetter: __utils.ASN1Encoder<KeyTransportRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_RecipientIdentifier(
                            value.recipientIdentifier,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_KeyTransportRecipientInfo(value, elGetter);
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
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.publicKey,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_OriginatorPublicKey(value, elGetter);
}

export type OriginatorIdentifierOrKey =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { originatorPublicKey: OriginatorPublicKey } /* CHOICE_ALT_ROOT */;
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
                "originatorPublicKey",
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
                    __utils.DER
                ),
                originatorPublicKey: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_OriginatorPublicKey,
                    __utils.DER
                ),
            },
            __utils.DER
        );
    }
    return _cached_encoder_for_OriginatorIdentifierOrKey(value, elGetter);
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
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.keyAttribute === undefined
                            ? undefined
                            : __utils._encodeAny(
                                  value.keyAttribute,
                                  __utils.DER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_OtherKeyAttribute(value, elGetter);
}

export class RecipientKeyIdentifier {
    constructor(
        readonly subjectKeyIdentifier: SubjectKeyIdentifier,
        readonly date: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly otherKeyAttribute: asn1.OPTIONAL<OtherKeyAttribute>
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
        "otherKeyAttribute",
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
            let otherKeyAttribute: asn1.OPTIONAL<OtherKeyAttribute>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                subjectKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    subjectKeyIdentifier = _decode_SubjectKeyIdentifier(_el);
                },
                date: (_el: asn1.ASN1Element): void => {
                    date = __utils._decodeGeneralizedTime(_el);
                },
                otherKeyAttribute: (_el: asn1.ASN1Element): void => {
                    otherKeyAttribute = _decode_OtherKeyAttribute(_el);
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
                otherKeyAttribute
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
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.date === undefined
                            ? undefined
                            : __utils._encodeGeneralizedTime(
                                  value.date,
                                  __utils.DER
                              ),
                        /* IF_ABSENT  */ value.otherKeyAttribute === undefined
                            ? undefined
                            : _encode_OtherKeyAttribute(
                                  value.otherKeyAttribute,
                                  __utils.DER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_RecipientKeyIdentifier(value, elGetter);
}

export type KeyAgreementRecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { recipientKeyIdentifier: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_KeyAgreementRecipientIdentifier: __utils.ASN1Decoder<
    KeyAgreementRecipientIdentifier
> | null = null;
let _cached_encoder_for_KeyAgreementRecipientIdentifier: __utils.ASN1Encoder<
    KeyAgreementRecipientIdentifier
> | null = null;
export function _decode_KeyAgreementRecipientIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyAgreementRecipientIdentifier) {
        _cached_decoder_for_KeyAgreementRecipientIdentifier = __utils._decode_inextensible_choice<
            KeyAgreementRecipientIdentifier
        >({
            "UNIVERSAL 16": [
                "issuerAndSerialNumber",
                _decode_IssuerAndSerialNumber,
            ],
            "CONTEXT 0": [
                "recipientKeyIdentifier",
                __utils._decode_implicit<RecipientKeyIdentifier>(
                    () => _decode_RecipientKeyIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_KeyAgreementRecipientIdentifier(el);
}
export function _encode_KeyAgreementRecipientIdentifier(
    value: KeyAgreementRecipientIdentifier,
    elGetter: __utils.ASN1Encoder<KeyAgreementRecipientIdentifier>
) {
    if (!_cached_encoder_for_KeyAgreementRecipientIdentifier) {
        _cached_encoder_for_KeyAgreementRecipientIdentifier = __utils._encode_choice<
            KeyAgreementRecipientIdentifier
        >(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                recipientKeyIdentifier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_RecipientKeyIdentifier,
                    __utils.DER
                ),
            },
            __utils.DER
        );
    }
    return _cached_encoder_for_KeyAgreementRecipientIdentifier(value, elGetter);
}

export class RecipientEncryptedKey {
    constructor(
        readonly recipientIdentifier: KeyAgreementRecipientIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "recipientIdentifier",
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
            sequence[0].name = "recipientIdentifier";
            sequence[1].name = "encryptedKey";
            let recipientIdentifier!: KeyAgreementRecipientIdentifier;
            let encryptedKey!: EncryptedKey;
            recipientIdentifier = _decode_KeyAgreementRecipientIdentifier(
                sequence[0]
            );
            encryptedKey = _decode_EncryptedKey(sequence[1]);
            // TODO: Validate values.
            return new RecipientEncryptedKey(recipientIdentifier, encryptedKey);
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
                        /* REQUIRED   */ _encode_KeyAgreementRecipientIdentifier(
                            value.recipientIdentifier,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
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
        >(() => _encode_RecipientEncryptedKey, __utils.DER);
    }
    return _cached_encoder_for_RecipientEncryptedKeys(value, elGetter);
}

export class KeyAgreementRecipientInfo {
    constructor(
        readonly version: Version,
        readonly originator: OriginatorIdentifierOrKey,
        readonly userKeyingMaterial: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreementRecipientInfo: __utils.ComponentSpec[] = [
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
        "userKeyingMaterial",
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
export const _root_component_type_list_2_spec_for_KeyAgreementRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyAgreementRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyAgreementRecipientInfo: __utils.ASN1Decoder<
    KeyAgreementRecipientInfo
> | null = null;
let _cached_encoder_for_KeyAgreementRecipientInfo: __utils.ASN1Encoder<
    KeyAgreementRecipientInfo
> | null = null;
export function _decode_KeyAgreementRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyAgreementRecipientInfo) {
        _cached_decoder_for_KeyAgreementRecipientInfo = function (
            el: asn1.ASN1Element
        ): KeyAgreementRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let originator!: OriginatorIdentifierOrKey;
            let userKeyingMaterial: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let recipientEncryptedKeys!: RecipientEncryptedKeys;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                originator: (_el: asn1.ASN1Element): void => {
                    originator = __utils._decode_implicit<
                        OriginatorIdentifierOrKey
                    >(() => _decode_OriginatorIdentifierOrKey)(_el);
                },
                userKeyingMaterial: (_el: asn1.ASN1Element): void => {
                    userKeyingMaterial = __utils._decode_explicit<
                        asn1.OCTET_STRING
                    >(() => __utils._decodeOctetString)(_el);
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
                _root_component_type_list_1_spec_for_KeyAgreementRecipientInfo,
                _extension_additions_list_spec_for_KeyAgreementRecipientInfo,
                _root_component_type_list_2_spec_for_KeyAgreementRecipientInfo,
                undefined
            );
            return new KeyAgreementRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                originator,
                userKeyingMaterial,
                keyEncryptionAlgorithm,
                recipientEncryptedKeys
            );
        };
    }
    return _cached_decoder_for_KeyAgreementRecipientInfo(el);
}
export function _encode_KeyAgreementRecipientInfo(
    value: KeyAgreementRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyAgreementRecipientInfo>
) {
    if (!_cached_encoder_for_KeyAgreementRecipientInfo) {
        _cached_encoder_for_KeyAgreementRecipientInfo = function (
            value: KeyAgreementRecipientInfo,
            elGetter: __utils.ASN1Encoder<KeyAgreementRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_OriginatorIdentifierOrKey,
                            __utils.DER
                        )(value.originator, __utils.DER),
                        /* IF_ABSENT  */ value.userKeyingMaterial === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeOctetString,
                                  __utils.DER
                              )(value.userKeyingMaterial, __utils.DER),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_RecipientEncryptedKeys(
                            value.recipientEncryptedKeys,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_KeyAgreementRecipientInfo(value, elGetter);
}

export class KeyEncryptionKeyIdentifier {
    constructor(
        readonly keyIdentifier: asn1.OCTET_STRING,
        readonly date: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly otherKeyAttribute: asn1.OPTIONAL<OtherKeyAttribute>
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyEncryptionKeyIdentifier: __utils.ComponentSpec[] = [
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
        "otherKeyAttribute",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyEncryptionKeyIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyEncryptionKeyIdentifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyEncryptionKeyIdentifier: __utils.ASN1Decoder<
    KeyEncryptionKeyIdentifier
> | null = null;
let _cached_encoder_for_KeyEncryptionKeyIdentifier: __utils.ASN1Encoder<
    KeyEncryptionKeyIdentifier
> | null = null;
export function _decode_KeyEncryptionKeyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyEncryptionKeyIdentifier) {
        _cached_decoder_for_KeyEncryptionKeyIdentifier = function (
            el: asn1.ASN1Element
        ): KeyEncryptionKeyIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyIdentifier!: asn1.OCTET_STRING;
            let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let otherKeyAttribute: asn1.OPTIONAL<OtherKeyAttribute>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                keyIdentifier: (_el: asn1.ASN1Element): void => {
                    keyIdentifier = __utils._decodeOctetString(_el);
                },
                date: (_el: asn1.ASN1Element): void => {
                    date = __utils._decodeGeneralizedTime(_el);
                },
                otherKeyAttribute: (_el: asn1.ASN1Element): void => {
                    otherKeyAttribute = _decode_OtherKeyAttribute(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyEncryptionKeyIdentifier,
                _extension_additions_list_spec_for_KeyEncryptionKeyIdentifier,
                _root_component_type_list_2_spec_for_KeyEncryptionKeyIdentifier,
                undefined
            );
            return new KeyEncryptionKeyIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                keyIdentifier,
                date,
                otherKeyAttribute
            );
        };
    }
    return _cached_decoder_for_KeyEncryptionKeyIdentifier(el);
}
export function _encode_KeyEncryptionKeyIdentifier(
    value: KeyEncryptionKeyIdentifier,
    elGetter: __utils.ASN1Encoder<KeyEncryptionKeyIdentifier>
) {
    if (!_cached_encoder_for_KeyEncryptionKeyIdentifier) {
        _cached_encoder_for_KeyEncryptionKeyIdentifier = function (
            value: KeyEncryptionKeyIdentifier,
            elGetter: __utils.ASN1Encoder<KeyEncryptionKeyIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.keyIdentifier,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.date === undefined
                            ? undefined
                            : __utils._encodeGeneralizedTime(
                                  value.date,
                                  __utils.DER
                              ),
                        /* IF_ABSENT  */ value.otherKeyAttribute === undefined
                            ? undefined
                            : _encode_OtherKeyAttribute(
                                  value.otherKeyAttribute,
                                  __utils.DER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_KeyEncryptionKeyIdentifier(value, elGetter);
}

export class KeyEncryptionKeyRecipientInfo {
    constructor(
        readonly version: Version,
        readonly keyEncryptionKeyIdentifier: KeyEncryptionKeyIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyEncryptionKeyRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionKeyIdentifier",
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
export const _root_component_type_list_2_spec_for_KeyEncryptionKeyRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyEncryptionKeyRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyEncryptionKeyRecipientInfo: __utils.ASN1Decoder<
    KeyEncryptionKeyRecipientInfo
> | null = null;
let _cached_encoder_for_KeyEncryptionKeyRecipientInfo: __utils.ASN1Encoder<
    KeyEncryptionKeyRecipientInfo
> | null = null;
export function _decode_KeyEncryptionKeyRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyEncryptionKeyRecipientInfo) {
        _cached_decoder_for_KeyEncryptionKeyRecipientInfo = function (
            el: asn1.ASN1Element
        ): KeyEncryptionKeyRecipientInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "KeyEncryptionKeyRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "keyEncryptionKeyIdentifier";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: Version;
            let keyEncryptionKeyIdentifier!: KeyEncryptionKeyIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_Version(sequence[0]);
            keyEncryptionKeyIdentifier = _decode_KeyEncryptionKeyIdentifier(
                sequence[1]
            );
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            // TODO: Validate values.
            return new KeyEncryptionKeyRecipientInfo(
                version,
                keyEncryptionKeyIdentifier,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KeyEncryptionKeyRecipientInfo(el);
}
export function _encode_KeyEncryptionKeyRecipientInfo(
    value: KeyEncryptionKeyRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyEncryptionKeyRecipientInfo>
) {
    if (!_cached_encoder_for_KeyEncryptionKeyRecipientInfo) {
        _cached_encoder_for_KeyEncryptionKeyRecipientInfo = function (
            value: KeyEncryptionKeyRecipientInfo,
            elGetter: __utils.ASN1Encoder<KeyEncryptionKeyRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionKeyIdentifier(
                            value.keyEncryptionKeyIdentifier,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_KeyEncryptionKeyRecipientInfo(value, elGetter);
}

export type RecipientInfo =
    | {
          keyTransportRecipientInfo: KeyTransportRecipientInfo;
      } /* CHOICE_ALT_ROOT */
    | {
          keyAgreementRecipientInfo: KeyAgreementRecipientInfo;
      } /* CHOICE_ALT_ROOT */
    | {
          keyEncryptionKeyRecipientInfo: KeyEncryptionKeyRecipientInfo;
      } /* CHOICE_ALT_ROOT */;
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
            "UNIVERSAL 16": [
                "keyTransportRecipientInfo",
                _decode_KeyTransportRecipientInfo,
            ],
            "CONTEXT 1": [
                "keyAgreementRecipientInfo",
                __utils._decode_implicit<KeyAgreementRecipientInfo>(
                    () => _decode_KeyAgreementRecipientInfo
                ),
            ],
            "CONTEXT 2": [
                "keyEncryptionKeyRecipientInfo",
                __utils._decode_implicit<KeyEncryptionKeyRecipientInfo>(
                    () => _decode_KeyEncryptionKeyRecipientInfo
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
                keyTransportRecipientInfo: _encode_KeyTransportRecipientInfo,
                keyAgreementRecipientInfo: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_KeyAgreementRecipientInfo,
                    __utils.DER
                ),
                keyEncryptionKeyRecipientInfo: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_KeyEncryptionKeyRecipientInfo,
                    __utils.DER
                ),
            },
            __utils.DER
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
        >(() => _encode_RecipientInfo, __utils.DER);
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

export class EncryptedContentInfo {
    constructor(
        readonly contentType: asn1.OBJECT_IDENTIFIER,
        readonly contentEncryptionAlgorithm: ContentEncryptionAlgorithmIdentifier,
        readonly encryptedContent: asn1.OPTIONAL<ENCRYPTED>
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
            let contentType!: asn1.OBJECT_IDENTIFIER;
            let contentEncryptionAlgorithm!: ContentEncryptionAlgorithmIdentifier;
            let encryptedContent: asn1.OPTIONAL<ENCRYPTED>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                contentType: (_el: asn1.ASN1Element): void => {
                    contentType = __utils._decodeObjectIdentifier(_el);
                },
                contentEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
                    contentEncryptionAlgorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedContent: (_el: asn1.ASN1Element): void => {
                    encryptedContent = __utils._decode_implicit<
                        ENCRYPTED
                    >(() =>
                        _get_decoder_for_ENCRYPTED<asn1.ASN1Element>(
                            __utils._decodeAny
                        )
                    )(_el);
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
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.contentType,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_ContentEncryptionAlgorithmIdentifier(
                            value.contentEncryptionAlgorithm,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.encryptedContent === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      _get_encoder_for_ENCRYPTED<
                                          asn1.ASN1Element
                                      >(__utils._encodeAny),
                                  __utils.DER
                              )(value.encryptedContent, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}

export class EnvelopedData {
    constructor(
        readonly version: Version,
        readonly originatorInfo: asn1.OPTIONAL<OriginatorInfo>,
        readonly recipientInfos: RecipientInfos,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttributes: asn1.OPTIONAL<Attributes>
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
        "unprotectedAttributes",
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
            let version!: Version;
            let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttributes: asn1.OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
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
                unprotectedAttributes: (_el: asn1.ASN1Element): void => {
                    unprotectedAttributes = __utils._decode_implicit<
                        Attributes
                    >(() => _decode_Attributes)(_el);
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
                unprotectedAttributes
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  __utils.DER
                              )(value.originatorInfo, __utils.DER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  __utils.DER
                              )(value.unprotectedAttributes, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_EnvelopedData(value, elGetter);
}

// TODO: ObjectClassAssignment: OTHER-KEY-ATTRIBUTE

// TODO: ObjectSetAssignment: OtherKeyAttributeTable

// TODO: ObjectAssignment: signed-and-enveloped-data

export class SignedAndEnvelopedData {
    constructor(
        readonly version: Version,
        readonly recipientInfos: KeyTransportRecipientInfo[],
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly certificates: asn1.OPTIONAL<CertificateSet>,
        readonly crls: asn1.OPTIONAL<CertificateRevocationLists>,
        readonly signerInfos: SignerInfo[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedAndEnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
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
        "digestAlgorithms",
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
export const _root_component_type_list_2_spec_for_SignedAndEnvelopedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedAndEnvelopedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignedAndEnvelopedData: __utils.ASN1Decoder<
    SignedAndEnvelopedData
> | null = null;
let _cached_encoder_for_SignedAndEnvelopedData: __utils.ASN1Encoder<
    SignedAndEnvelopedData
> | null = null;
export function _decode_SignedAndEnvelopedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedAndEnvelopedData) {
        _cached_decoder_for_SignedAndEnvelopedData = function (
            el: asn1.ASN1Element
        ): SignedAndEnvelopedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let recipientInfos!: KeyTransportRecipientInfo[];
            let digestAlgorithms!: DigestAlgorithmIdentifiers;
            let encryptedContentInfo!: EncryptedContentInfo;
            let certificates: asn1.OPTIONAL<CertificateSet>;
            let crls: asn1.OPTIONAL<CertificateRevocationLists>;
            let signerInfos!: SignerInfo[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                recipientInfos: (_el: asn1.ASN1Element): void => {
                    recipientInfos = __utils._decodeSetOf<
                        KeyTransportRecipientInfo
                    >(() => _decode_KeyTransportRecipientInfo)(_el);
                },
                digestAlgorithms: (_el: asn1.ASN1Element): void => {
                    digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
                },
                encryptedContentInfo: (_el: asn1.ASN1Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
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
                    signerInfos = __utils._decodeSetOf<SignerInfo>(
                        () => _decode_SignerInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedAndEnvelopedData,
                _extension_additions_list_spec_for_SignedAndEnvelopedData,
                _root_component_type_list_2_spec_for_SignedAndEnvelopedData,
                undefined
            );
            return new SignedAndEnvelopedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                recipientInfos,
                digestAlgorithms,
                encryptedContentInfo,
                certificates,
                crls,
                signerInfos
            );
        };
    }
    return _cached_decoder_for_SignedAndEnvelopedData(el);
}
export function _encode_SignedAndEnvelopedData(
    value: SignedAndEnvelopedData,
    elGetter: __utils.ASN1Encoder<SignedAndEnvelopedData>
) {
    if (!_cached_encoder_for_SignedAndEnvelopedData) {
        _cached_encoder_for_SignedAndEnvelopedData = function (
            value: SignedAndEnvelopedData,
            elGetter: __utils.ASN1Encoder<SignedAndEnvelopedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeSetOf<
                            KeyTransportRecipientInfo
                        >(() => _encode_KeyTransportRecipientInfo, __utils.DER)(
                            value.recipientInfos,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                            value.digestAlgorithms,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  __utils.DER
                              )(value.certificates, __utils.DER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  __utils.DER
                              )(value.crls, __utils.DER),
                        /* REQUIRED   */ __utils._encodeSetOf<SignerInfo>(
                            () => _encode_SignerInfo,
                            __utils.DER
                        )(value.signerInfos, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_SignedAndEnvelopedData(value, elGetter);
}

// TODO: ObjectAssignment: digested-data

export class DigestedData {
    constructor(
        readonly version: Version,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly contentInfo: ContentInfo,
        readonly digest: HASH<asn1.ASN1Element>
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
        "contentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
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
            sequence[2].name = "contentInfo";
            sequence[3].name = "digest";
            let version!: Version;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let contentInfo!: ContentInfo;
            let digest!: HASH<asn1.ASN1Element>;
            version = _decode_Version(sequence[0]);
            digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[1]);
            contentInfo = _decode_ContentInfo(sequence[2]);
            digest = _get_decoder_for_HASH<asn1.ASN1Element>(
                __utils._decodeAny
            )(sequence[3]);
            // TODO: Validate values.
            return new DigestedData(
                version,
                digestAlgorithm,
                contentInfo,
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.contentInfo,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _get_encoder_for_HASH<
                            asn1.ASN1Element
                        >(__utils._encodeAny)(value.digest, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_DigestedData(value, elGetter);
}

// TODO: ObjectAssignment: encrypted-data

export class EncryptedData {
    constructor(
        readonly version: Version,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttributes: asn1.OPTIONAL<Attributes>
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
        "unprotectedAttributes",
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
            let version!: Version;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttributes: asn1.OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                encryptedContentInfo: (_el: asn1.ASN1Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttributes: (_el: asn1.ASN1Element): void => {
                    unprotectedAttributes = __utils._decode_implicit<
                        Attributes
                    >(() => _decode_Attributes)(_el);
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
                unprotectedAttributes
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  __utils.DER
                              )(value.unprotectedAttributes, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}

// TODO: ObjectAssignment: authenticated-data

export type MessageAuthenticationCodeAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier: __utils.ASN1Decoder<
    MessageAuthenticationCodeAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier: __utils.ASN1Encoder<
    MessageAuthenticationCodeAlgorithmIdentifier
> | null = null;
export function _decode_MessageAuthenticationCodeAlgorithmIdentifier(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier) {
        _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier(el);
}
export function _encode_MessageAuthenticationCodeAlgorithmIdentifier(
    value: MessageAuthenticationCodeAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<MessageAuthenticationCodeAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier) {
        _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier(
        value,
        elGetter
    );
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
        readonly version: Version,
        readonly originatorInfo: asn1.OPTIONAL<OriginatorInfo>,
        readonly recipientInfos: RecipientInfos,
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithmIdentifier,
        readonly digestAlgorithm: asn1.OPTIONAL<DigestAlgorithmIdentifier>,
        readonly contentInfo: ContentInfo,
        readonly authenticatedAttributes: asn1.OPTIONAL<Attributes>,
        readonly messageAuthenticationCode: MessageAuthenticationCode,
        readonly unauthenticatedAttributes: asn1.OPTIONAL<Attributes>
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
        "contentInfo",
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
        "messageAuthenticationCode",
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
            let version!: Version;
            let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let macAlgorithm!: MessageAuthenticationCodeAlgorithmIdentifier;
            let digestAlgorithm: asn1.OPTIONAL<DigestAlgorithmIdentifier>;
            let contentInfo!: ContentInfo;
            let authenticatedAttributes: asn1.OPTIONAL<Attributes>;
            let messageAuthenticationCode!: MessageAuthenticationCode;
            let unauthenticatedAttributes: asn1.OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
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
                    macAlgorithm = _decode_MessageAuthenticationCodeAlgorithmIdentifier(
                        _el
                    );
                },
                digestAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestAlgorithm = __utils._decode_implicit<
                        DigestAlgorithmIdentifier
                    >(() => _decode_DigestAlgorithmIdentifier)(_el);
                },
                contentInfo: (_el: asn1.ASN1Element): void => {
                    contentInfo = _decode_ContentInfo(_el);
                },
                authenticatedAttributes: (_el: asn1.ASN1Element): void => {
                    authenticatedAttributes = __utils._decode_implicit<
                        Attributes
                    >(() => _decode_Attributes)(_el);
                },
                messageAuthenticationCode: (_el: asn1.ASN1Element): void => {
                    messageAuthenticationCode = _decode_MessageAuthenticationCode(
                        _el
                    );
                },
                unauthenticatedAttributes: (_el: asn1.ASN1Element): void => {
                    unauthenticatedAttributes = __utils._decode_implicit<
                        Attributes
                    >(() => _decode_Attributes)(_el);
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
                contentInfo,
                authenticatedAttributes,
                messageAuthenticationCode,
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
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  __utils.DER
                              )(value.originatorInfo, __utils.DER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            __utils.DER
                        ),
                        /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithmIdentifier(
                            value.macAlgorithm,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.digestAlgorithm === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_DigestAlgorithmIdentifier,
                                  __utils.DER
                              )(value.digestAlgorithm, __utils.DER),
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.contentInfo,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.authenticatedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_Attributes,
                                  __utils.DER
                              )(value.authenticatedAttributes, __utils.DER),
                        /* REQUIRED   */ _encode_MessageAuthenticationCode(
                            value.messageAuthenticationCode,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.unauthenticatedAttributes ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_Attributes,
                                  __utils.DER
                              )(value.unauthenticatedAttributes, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_AuthenticatedData(value, elGetter);
}

const member_body = 2;
export const id_pkcs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [member_body, /* usa */ 840, /* rsadsi */ 113549, /* pkcs */ 1],
    iso
);

export const id_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 1],
    id_pkcs
);

export const id_signed_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 2],
    id_pkcs
);

export const id_enveloped_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 3],
    id_pkcs
);

export const id_signed_and_enveloped_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 4],
    id_pkcs
);

export const id_digested_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 5],
    id_pkcs
);

export const id_encrypted_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 6],
    id_pkcs
);

export const id_authenticated_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9, 16, 1, 2],
    id_pkcs
);

/* END_MODULE PKCS7 */

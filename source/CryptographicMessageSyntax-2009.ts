
/*
    BEGIN_MODULE CryptographicMessageSyntax-2009
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.id-mod-cms-2004-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";
import * as AlgorithmInformation_2009 from "./AlgorithmInformation-2009";
import {
    ParamOptions,
    DIGEST_ALGORITHM,
    SIGNATURE_ALGORITHM,
    PUBLIC_KEY,
    KEY_DERIVATION,
    KEY_WRAP,
    MAC_ALGORITHM,
    KEY_AGREE,
    KEY_TRANSPORT,
    CONTENT_ENCRYPTION,
    ALGORITHM,
    AlgorithmIdentifier,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";
export {
    ParamOptions,
    DIGEST_ALGORITHM,
    SIGNATURE_ALGORITHM,
    PUBLIC_KEY,
    KEY_DERIVATION,
    KEY_WRAP,
    MAC_ALGORITHM,
    KEY_AGREE,
    KEY_TRANSPORT,
    CONTENT_ENCRYPTION,
    ALGORITHM,
    AlgorithmIdentifier,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";

import * as CryptographicMessageSyntaxAlgorithms_2009 from "./CryptographicMessageSyntaxAlgorithms-2009";
import {
    SignatureAlgs,
    MessageDigestAlgs,
    KeyAgreementAlgs,
    MessageAuthAlgs,
    KeyWrapAlgs,
    ContentEncryptionAlgs,
    KeyTransportAlgs,
    KeyDerivationAlgs,
    KeyAgreePublicKeys,
    _decode_SignatureAlgs,
    _encode_SignatureAlgs,
    _decode_MessageDigestAlgs,
    _encode_MessageDigestAlgs,
    _decode_KeyAgreementAlgs,
    _encode_KeyAgreementAlgs,
    _decode_MessageAuthAlgs,
    _encode_MessageAuthAlgs,
    _decode_KeyWrapAlgs,
    _encode_KeyWrapAlgs,
    _decode_ContentEncryptionAlgs,
    _encode_ContentEncryptionAlgs,
    _decode_KeyTransportAlgs,
    _encode_KeyTransportAlgs,
    _decode_KeyDerivationAlgs,
    _encode_KeyDerivationAlgs,
    _decode_KeyAgreePublicKeys,
    _encode_KeyAgreePublicKeys
} from "./CryptographicMessageSyntaxAlgorithms-2009";
export {
    SignatureAlgs,
    MessageDigestAlgs,
    KeyAgreementAlgs,
    MessageAuthAlgs,
    KeyWrapAlgs,
    ContentEncryptionAlgs,
    KeyTransportAlgs,
    KeyDerivationAlgs,
    KeyAgreePublicKeys,
    _decode_SignatureAlgs,
    _encode_SignatureAlgs,
    _decode_MessageDigestAlgs,
    _encode_MessageDigestAlgs,
    _decode_KeyAgreementAlgs,
    _encode_KeyAgreementAlgs,
    _decode_MessageAuthAlgs,
    _encode_MessageAuthAlgs,
    _decode_KeyWrapAlgs,
    _encode_KeyWrapAlgs,
    _decode_ContentEncryptionAlgs,
    _encode_ContentEncryptionAlgs,
    _decode_KeyTransportAlgs,
    _encode_KeyTransportAlgs,
    _decode_KeyDerivationAlgs,
    _encode_KeyDerivationAlgs,
    _decode_KeyAgreePublicKeys,
    _encode_KeyAgreePublicKeys
} from "./CryptographicMessageSyntaxAlgorithms-2009";

import * as PKIX1Explicit_2009 from "./PKIX1Explicit-2009";
import {
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    Name,
    ATTRIBUTE,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_Name,
    _encode_Name,
    _decode_ATTRIBUTE,
    _encode_ATTRIBUTE
} from "./PKIX1Explicit-2009";
export {
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    Name,
    ATTRIBUTE,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_Name,
    _encode_Name,
    _decode_ATTRIBUTE,
    _encode_ATTRIBUTE
} from "./PKIX1Explicit-2009";

import * as PKIXAttributeCertificate_2009 from "./PKIXAttributeCertificate-2009";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate
} from "./PKIXAttributeCertificate-2009";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate
} from "./PKIXAttributeCertificate-2009";

import * as AttributeCertificateVersion1_2009 from "./AttributeCertificateVersion1-2009";
import {
    AttributeCertificateV1,
    _decode_AttributeCertificateV1,
    _encode_AttributeCertificateV1
} from "./AttributeCertificateVersion1-2009";
export {
    AttributeCertificateV1,
    _decode_AttributeCertificateV1,
    _encode_AttributeCertificateV1
} from "./AttributeCertificateVersion1-2009";


export type ContentType = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
export const _decode_ContentType = __utils._decodeObjectIdentifier;
export const _encode_ContentType = __utils._encodeObjectIdentifier;


export class ContentInfo {
    constructor (
        readonly contentType: asn1.OBJECT_IDENTIFIER,
        readonly content: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contentType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("content", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ContentInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ContentInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_ContentInfo = function (el: asn1.ASN1Element): ContentInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ContentInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "contentType";
    sequence[1].name = "content";
    let contentType!: asn1.OBJECT_IDENTIFIER;
    let content!: asn1.ASN1Element;
    contentType = __utils._decodeObjectIdentifier(sequence[0]);
    content = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(sequence[1]);
    // TODO: Validate values.
    return new ContentInfo(
        contentType,
        content,

    );
};
export const _encode_ContentInfo = function (value: ContentInfo, elGetter: __utils.ASN1Encoder<ContentInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.contentType, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER)(value.content, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: ContentSet

export type CMSVersion = asn1.INTEGER;
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */
export const v0: CMSVersion = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
export const CMSVersion_v1: CMSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
export const v1: CMSVersion = CMSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const CMSVersion_v2: CMSVersion = 2; /* LONG_NAMED_INTEGER_VALUE */
export const v2: CMSVersion = CMSVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */
export const CMSVersion_v3: CMSVersion = 3; /* LONG_NAMED_INTEGER_VALUE */
export const v3: CMSVersion = CMSVersion_v3; /* SHORT_NAMED_INTEGER_VALUE */
export const CMSVersion_v4: CMSVersion = 4; /* LONG_NAMED_INTEGER_VALUE */
export const v4: CMSVersion = CMSVersion_v4; /* SHORT_NAMED_INTEGER_VALUE */
export const CMSVersion_v5: CMSVersion = 5; /* LONG_NAMED_INTEGER_VALUE */
export const v5: CMSVersion = CMSVersion_v5; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CMSVersion = __utils._decodeInteger;
export const _encode_CMSVersion = __utils._encodeInteger;


export type DigestAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_DigestAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_DigestAlgorithmIdentifier = _encode_AlgorithmIdentifier;


export class EncapsulatedContentInfo {
    constructor (
        readonly eContentType: asn1.OBJECT_IDENTIFIER,
        readonly eContent: asn1.OCTET_STRING | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("eContentType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("eContent", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_EncapsulatedContentInfo = function (el: asn1.ASN1Element): EncapsulatedContentInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let eContentType!: asn1.OBJECT_IDENTIFIER;
    let eContent: asn1.OPTIONAL<asn1.OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "eContentType": (_el: asn1.ASN1Element): void => { eContentType = __utils._decodeObjectIdentifier(_el); },
        "eContent": (_el: asn1.ASN1Element): void => { eContent = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncapsulatedContentInfo,
        _extension_additions_list_spec_for_EncapsulatedContentInfo,
        _root_component_type_list_2_spec_for_EncapsulatedContentInfo,
        undefined,
    );
    return new EncapsulatedContentInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        eContentType,
        eContent
    );
};
export const _encode_EncapsulatedContentInfo = function (value: EncapsulatedContentInfo, elGetter: __utils.ASN1Encoder<EncapsulatedContentInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.eContentType, __utils.BER),
            /* IF_ABSENT  */ ((value.eContent === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER)(value.eContent, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Attribute {
    constructor (
        readonly attrType: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        readonly attrValues: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attrType", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("attrValues", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Attribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Attribute: __utils.ComponentSpec[] = [
    
];

export const _decode_Attribute = function (el: asn1.ASN1Element): Attribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("Attribute contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "attrType";
    sequence[1].name = "attrValues";
    let attrType!: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
    let attrValues!: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */[];
    attrType = __utils._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */(sequence[0]);
    attrValues = __utils._decodeSetOf<asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(() => __utils._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */)(sequence[1]);
    // TODO: Validate values.
    return new Attribute(
        attrType,
        attrValues,

    );
};
export const _encode_Attribute = function (value: Attribute, elGetter: __utils.ASN1Encoder<Attribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */(value.attrType, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(() => __utils._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */, __utils.BER)(value.attrValues, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type UnauthAttributes = Attribute[]; // SetOfType
export const _decode_UnauthAttributes = __utils._decodeSetOf<Attribute>(() => _decode_Attribute);
export const _encode_UnauthAttributes = __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER);


export class ExtendedCertificateInfo {
    constructor (
        readonly version: CMSVersion,
        readonly certificate: Certificate,
        readonly attributes: UnauthAttributes
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    /* FIXME: certificate COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_ExtendedCertificateInfo = function (el: asn1.ASN1Element): ExtendedCertificateInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("ExtendedCertificateInfo contained only " + sequence.length.toString() + " elements.");
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
        attributes,

    );
};
export const _encode_ExtendedCertificateInfo = function (value: ExtendedCertificateInfo, elGetter: __utils.ASN1Encoder<ExtendedCertificateInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ _encode_Certificate(value.certificate, __utils.BER),
            /* REQUIRED   */ _encode_UnauthAttributes(value.attributes, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_SignatureAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_SignatureAlgorithmIdentifier = _encode_AlgorithmIdentifier;


export type Signature = asn1.BIT_STRING;
export const _decode_Signature = __utils._decodeBitString;
export const _encode_Signature = __utils._encodeBitString;


export class ExtendedCertificate {
    constructor (
        readonly extendedCertificateInfo: ExtendedCertificateInfo,
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        readonly signature: Signature
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("extendedCertificateInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signatureAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ExtendedCertificate: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ExtendedCertificate: __utils.ComponentSpec[] = [
    
];

export const _decode_ExtendedCertificate = function (el: asn1.ASN1Element): ExtendedCertificate {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("ExtendedCertificate contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "extendedCertificateInfo";
    sequence[1].name = "signatureAlgorithm";
    sequence[2].name = "signature";
    let extendedCertificateInfo!: ExtendedCertificateInfo;
    let signatureAlgorithm!: SignatureAlgorithmIdentifier;
    let signature!: Signature;
    extendedCertificateInfo = _decode_ExtendedCertificateInfo(sequence[0]);
    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(sequence[1]);
    signature = _decode_Signature(sequence[2]);
    // TODO: Validate values.
    return new ExtendedCertificate(
        extendedCertificateInfo,
        signatureAlgorithm,
        signature,

    );
};
export const _encode_ExtendedCertificate = function (value: ExtendedCertificate, elGetter: __utils.ASN1Encoder<ExtendedCertificate>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ExtendedCertificateInfo(value.extendedCertificateInfo, __utils.BER),
            /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(value.signatureAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_Signature(value.signature, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeCertificateV2 = AttributeCertificate; // DefinedType
export const _decode_AttributeCertificateV2 = _decode_AttributeCertificate;
export const _encode_AttributeCertificateV2 = _encode_AttributeCertificate;


export class OtherCertificateFormat {
    constructor (
        readonly otherCertFormat: asn1.OBJECT_IDENTIFIER,
        readonly otherCert: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherCertificateFormat: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("otherCertFormat", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("otherCert", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherCertificateFormat: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OtherCertificateFormat: __utils.ComponentSpec[] = [
    
];

export const _decode_OtherCertificateFormat = function (el: asn1.ASN1Element): OtherCertificateFormat {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OtherCertificateFormat contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "otherCertFormat";
    sequence[1].name = "otherCert";
    let otherCertFormat!: asn1.OBJECT_IDENTIFIER;
    let otherCert!: asn1.ASN1Element;
    otherCertFormat = __utils._decodeObjectIdentifier(sequence[0]);
    otherCert = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new OtherCertificateFormat(
        otherCertFormat,
        otherCert,

    );
};
export const _encode_OtherCertificateFormat = function (value: OtherCertificateFormat, elGetter: __utils.ASN1Encoder<OtherCertificateFormat>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.otherCertFormat, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.otherCert, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type CertificateChoices =
    { certificate: Certificate }
    | { extendedCertificate: ExtendedCertificate }
    | asn1.ASN1Element;
export const _decode_CertificateChoices = __utils._decode_extensible_choice<CertificateChoices>({
    /* NO_TAG_OR_TAG_CLASS */: [ "certificate", _decode_Certificate ],
    "CONTEXT 0": [ "extendedCertificate", __utils._decode_implicit<ExtendedCertificate>(() => _decode_ExtendedCertificate) ],
    "CONTEXT 1": [ "v1AttrCert", __utils._decode_implicit<AttributeCertificateV1>(() => _decode_AttributeCertificateV1) ],
    "CONTEXT 2": [ "v2AttrCert", __utils._decode_implicit<AttributeCertificateV2>(() => _decode_AttributeCertificateV2) ],
    "CONTEXT 3": [ "other", __utils._decode_implicit<OtherCertificateFormat>(() => _decode_OtherCertificateFormat) ]
});
export const _encode_CertificateChoices = __utils._encode_choice<CertificateChoices>({
    "certificate": _encode_Certificate,
    "extendedCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_ExtendedCertificate, __utils.BER),
    "v1AttrCert": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeCertificateV1, __utils.BER),
    "v2AttrCert": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_AttributeCertificateV2, __utils.BER),
    "other": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_OtherCertificateFormat, __utils.BER),
}, __utils.BER);


export type CertificateSet = CertificateChoices[]; // SetOfType
export const _decode_CertificateSet = __utils._decodeSetOf<CertificateChoices>(() => _decode_CertificateChoices);
export const _encode_CertificateSet = __utils._encodeSetOf<CertificateChoices>(() => _encode_CertificateChoices, __utils.BER);


export class OtherRevocationInfoFormat {
    constructor (
        readonly otherRevInfoFormat: asn1.OBJECT_IDENTIFIER,
        readonly otherRevInfo: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherRevocationInfoFormat: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("otherRevInfoFormat", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("otherRevInfo", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherRevocationInfoFormat: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OtherRevocationInfoFormat: __utils.ComponentSpec[] = [
    
];

export const _decode_OtherRevocationInfoFormat = function (el: asn1.ASN1Element): OtherRevocationInfoFormat {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OtherRevocationInfoFormat contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "otherRevInfoFormat";
    sequence[1].name = "otherRevInfo";
    let otherRevInfoFormat!: asn1.OBJECT_IDENTIFIER;
    let otherRevInfo!: asn1.ASN1Element;
    otherRevInfoFormat = __utils._decodeObjectIdentifier(sequence[0]);
    otherRevInfo = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new OtherRevocationInfoFormat(
        otherRevInfoFormat,
        otherRevInfo,

    );
};
export const _encode_OtherRevocationInfoFormat = function (value: OtherRevocationInfoFormat, elGetter: __utils.ASN1Encoder<OtherRevocationInfoFormat>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.otherRevInfoFormat, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.otherRevInfo, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type RevocationInfoChoice =
    { crl: CertificateList }
    | asn1.ASN1Element;
export const _decode_RevocationInfoChoice = __utils._decode_extensible_choice<RevocationInfoChoice>({
    /* NO_TAG_OR_TAG_CLASS */: [ "crl", _decode_CertificateList ],
    "CONTEXT 1": [ "other", __utils._decode_implicit<OtherRevocationInfoFormat>(() => _decode_OtherRevocationInfoFormat) ]
});
export const _encode_RevocationInfoChoice = __utils._encode_choice<RevocationInfoChoice>({
    "crl": _encode_CertificateList,
    "other": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_OtherRevocationInfoFormat, __utils.BER),
}, __utils.BER);


export type RevocationInfoChoices = RevocationInfoChoice[]; // SetOfType
export const _decode_RevocationInfoChoices = __utils._decodeSetOf<RevocationInfoChoice>(() => _decode_RevocationInfoChoice);
export const _encode_RevocationInfoChoices = __utils._encodeSetOf<RevocationInfoChoice>(() => _encode_RevocationInfoChoice, __utils.BER);


export class IssuerAndSerialNumber {
    constructor (
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    /* FIXME: issuer COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: serialNumber COULD_NOT_RESOLVE_TYPE_DEF */
];
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    
];

export const _decode_IssuerAndSerialNumber = function (el: asn1.ASN1Element): IssuerAndSerialNumber {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("IssuerAndSerialNumber contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "serialNumber";
    let issuer!: Name;
    let serialNumber!: CertificateSerialNumber;
    issuer = _decode_Name(sequence[0]);
    serialNumber = _decode_CertificateSerialNumber(sequence[1]);
    // TODO: Validate values.
    return new IssuerAndSerialNumber(
        issuer,
        serialNumber,

    );
};
export const _encode_IssuerAndSerialNumber = function (value: IssuerAndSerialNumber, elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SubjectKeyIdentifier = asn1.OCTET_STRING; // OctetStringType
export const _decode_SubjectKeyIdentifier = __utils._decodeOctetString;
export const _encode_SubjectKeyIdentifier = __utils._encodeOctetString;


export type SignerIdentifier =
    { issuerAndSerialNumber: IssuerAndSerialNumber }
    | asn1.ASN1Element;
export const _decode_SignerIdentifier = __utils._decode_extensible_choice<SignerIdentifier>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "subjectKeyIdentifier", __utils._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier) ]
});
export const _encode_SignerIdentifier = __utils._encode_choice<SignerIdentifier>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "subjectKeyIdentifier": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SubjectKeyIdentifier, __utils.BER),
}, __utils.BER);


export type Attributes = Attribute[]; // SetOfType
export const _decode_Attributes = __utils._decodeSetOf<Attribute>(() => _decode_Attribute);
export const _encode_Attributes = __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER);


export type SignedAttributes = Attributes; // DefinedType
export const _decode_SignedAttributes = _decode_Attributes;
export const _encode_SignedAttributes = _encode_Attributes;


export type SignatureValue = asn1.OCTET_STRING; // OctetStringType
export const _decode_SignatureValue = __utils._decodeOctetString;
export const _encode_SignatureValue = __utils._encodeOctetString;


export class SignerInfo {
    constructor (
        readonly version: CMSVersion,
        readonly sid: SignerIdentifier,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly signedAttrs: SignedAttributes | undefined,
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        readonly signature: SignatureValue,
        readonly unsignedAttrs: Attributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SignerInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("sid", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("digestAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signedAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("signatureAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("unsignedAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SignerInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SignerInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_SignerInfo = function (el: asn1.ASN1Element): SignerInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let sid!: SignerIdentifier;
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let signedAttrs: asn1.OPTIONAL<SignedAttributes>;
    let signatureAlgorithm!: SignatureAlgorithmIdentifier;
    let signature!: SignatureValue;
    let unsignedAttrs: asn1.OPTIONAL<Attributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "sid": (_el: asn1.ASN1Element): void => { sid = _decode_SignerIdentifier(_el); },
        "digestAlgorithm": (_el: asn1.ASN1Element): void => { digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el); },
        "signedAttrs": (_el: asn1.ASN1Element): void => { signedAttrs = __utils._decode_implicit<SignedAttributes>(() => _decode_SignedAttributes)(_el); },
        "signatureAlgorithm": (_el: asn1.ASN1Element): void => { signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_SignatureValue(_el); },
        "unsignedAttrs": (_el: asn1.ASN1Element): void => { unsignedAttrs = __utils._decode_implicit<Attributes>(() => _decode_Attributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignerInfo,
        _extension_additions_list_spec_for_SignerInfo,
        _root_component_type_list_2_spec_for_SignerInfo,
        undefined,
    );
    return new SignerInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        sid,
        digestAlgorithm,
        signedAttrs,
        signatureAlgorithm,
        signature,
        unsignedAttrs
    );
};
export const _encode_SignerInfo = function (value: SignerInfo, elGetter: __utils.ASN1Encoder<SignerInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ _encode_SignerIdentifier(value.sid, __utils.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.digestAlgorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.signedAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SignedAttributes, __utils.BER)(value.signedAttrs, __utils.BER)),
            /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(value.signatureAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_SignatureValue(value.signature, __utils.BER),
            /* IF_ABSENT  */ ((value.unsignedAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Attributes, __utils.BER)(value.unsignedAttrs, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SignerInfos = SignerInfo[]; // SetOfType
export const _decode_SignerInfos = __utils._decodeSetOf<SignerInfo>(() => _decode_SignerInfo);
export const _encode_SignerInfos = __utils._encodeSetOf<SignerInfo>(() => _encode_SignerInfo, __utils.BER);


export class SignedData {
    constructor (
        readonly version: CMSVersion,
        readonly digestAlgorithms: DigestAlgorithmIdentifier[],
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly certificates: CertificateSet | undefined,
        readonly crls: RevocationInfoChoices | undefined,
        readonly signerInfos: SignerInfos
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("digestAlgorithms", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("encapContentInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("certificates", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("crls", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("signerInfos", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SignedData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SignedData: __utils.ComponentSpec[] = [
    
];

export const _decode_SignedData = function (el: asn1.ASN1Element): SignedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let digestAlgorithms!: DigestAlgorithmIdentifier[];
    let encapContentInfo!: EncapsulatedContentInfo;
    let certificates: asn1.OPTIONAL<CertificateSet>;
    let crls: asn1.OPTIONAL<RevocationInfoChoices>;
    let signerInfos!: SignerInfos;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "digestAlgorithms": (_el: asn1.ASN1Element): void => { digestAlgorithms = __utils._decodeSetOf<DigestAlgorithmIdentifier>(() => _decode_DigestAlgorithmIdentifier)(_el); },
        "encapContentInfo": (_el: asn1.ASN1Element): void => { encapContentInfo = _decode_EncapsulatedContentInfo(_el); },
        "certificates": (_el: asn1.ASN1Element): void => { certificates = __utils._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el); },
        "crls": (_el: asn1.ASN1Element): void => { crls = __utils._decode_implicit<RevocationInfoChoices>(() => _decode_RevocationInfoChoices)(_el); },
        "signerInfos": (_el: asn1.ASN1Element): void => { signerInfos = _decode_SignerInfos(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignedData,
        _extension_additions_list_spec_for_SignedData,
        _root_component_type_list_2_spec_for_SignedData,
        undefined,
    );
    return new SignedData( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        digestAlgorithms,
        encapContentInfo,
        certificates,
        crls,
        signerInfos
    );
};
export const _encode_SignedData = function (value: SignedData, elGetter: __utils.ASN1Encoder<SignedData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<DigestAlgorithmIdentifier>(() => _encode_DigestAlgorithmIdentifier, __utils.BER)(value.digestAlgorithms, __utils.BER),
            /* REQUIRED   */ _encode_EncapsulatedContentInfo(value.encapContentInfo, __utils.BER),
            /* IF_ABSENT  */ ((value.certificates === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_CertificateSet, __utils.BER)(value.certificates, __utils.BER)),
            /* IF_ABSENT  */ ((value.crls === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_RevocationInfoChoices, __utils.BER)(value.crls, __utils.BER)),
            /* REQUIRED   */ _encode_SignerInfos(value.signerInfos, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: SignedAttributesSet

// TODO: ObjectSetAssignment: UnsignedAttributes

export class OriginatorInfo {
    constructor (
        readonly certs: CertificateSet | undefined,
        readonly crls: RevocationInfoChoices | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certs", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("crls", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_OriginatorInfo = function (el: asn1.ASN1Element): OriginatorInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certs: asn1.OPTIONAL<CertificateSet>;
    let crls: asn1.OPTIONAL<RevocationInfoChoices>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certs": (_el: asn1.ASN1Element): void => { certs = __utils._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el); },
        "crls": (_el: asn1.ASN1Element): void => { crls = __utils._decode_implicit<RevocationInfoChoices>(() => _decode_RevocationInfoChoices)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OriginatorInfo,
        _extension_additions_list_spec_for_OriginatorInfo,
        _root_component_type_list_2_spec_for_OriginatorInfo,
        undefined,
    );
    return new OriginatorInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        certs,
        crls
    );
};
export const _encode_OriginatorInfo = function (value: OriginatorInfo, elGetter: __utils.ASN1Encoder<OriginatorInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.certs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_CertificateSet, __utils.BER)(value.certs, __utils.BER)),
            /* IF_ABSENT  */ ((value.crls === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_RevocationInfoChoices, __utils.BER)(value.crls, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type RecipientIdentifier =
    { issuerAndSerialNumber: IssuerAndSerialNumber }
    | asn1.ASN1Element;
export const _decode_RecipientIdentifier = __utils._decode_extensible_choice<RecipientIdentifier>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "subjectKeyIdentifier", __utils._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier) ]
});
export const _encode_RecipientIdentifier = __utils._encode_choice<RecipientIdentifier>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "subjectKeyIdentifier": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SubjectKeyIdentifier, __utils.BER),
}, __utils.BER);


export type EncryptedKey = asn1.OCTET_STRING; // OctetStringType
export const _decode_EncryptedKey = __utils._decodeOctetString;
export const _encode_EncryptedKey = __utils._encodeOctetString;


export class KeyTransRecipientInfo {
    constructor (
        readonly version: CMSVersion,
        readonly rid: RecipientIdentifier,
        readonly keyEncryptionAlgorithm: AlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyTransRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("rid", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyTransRecipientInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KeyTransRecipientInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_KeyTransRecipientInfo = function (el: asn1.ASN1Element): KeyTransRecipientInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError("KeyTransRecipientInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "rid";
    sequence[2].name = "keyEncryptionAlgorithm";
    sequence[3].name = "encryptedKey";
    let version!: CMSVersion;
    let rid!: RecipientIdentifier;
    let keyEncryptionAlgorithm!: AlgorithmIdentifier;
    let encryptedKey!: EncryptedKey;
    version = _decode_CMSVersion(sequence[0]);
    rid = _decode_RecipientIdentifier(sequence[1]);
    keyEncryptionAlgorithm = _decode_AlgorithmIdentifier(sequence[2]);
    encryptedKey = _decode_EncryptedKey(sequence[3]);
    // TODO: Validate values.
    return new KeyTransRecipientInfo(
        version,
        rid,
        keyEncryptionAlgorithm,
        encryptedKey,

    );
};
export const _encode_KeyTransRecipientInfo = function (value: KeyTransRecipientInfo, elGetter: __utils.ASN1Encoder<KeyTransRecipientInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ _encode_RecipientIdentifier(value.rid, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.keyEncryptionAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_EncryptedKey(value.encryptedKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class OriginatorPublicKey {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly publicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("publicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [
    
];

export const _decode_OriginatorPublicKey = function (el: asn1.ASN1Element): OriginatorPublicKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OriginatorPublicKey contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "publicKey";
    let algorithm!: AlgorithmIdentifier;
    let publicKey!: asn1.BIT_STRING;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    publicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new OriginatorPublicKey(
        algorithm,
        publicKey,

    );
};
export const _encode_OriginatorPublicKey = function (value: OriginatorPublicKey, elGetter: __utils.ASN1Encoder<OriginatorPublicKey>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.publicKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OriginatorIdentifierOrKey =
    { issuerAndSerialNumber: IssuerAndSerialNumber }
    | { subjectKeyIdentifier: SubjectKeyIdentifier }
    | { originatorKey: OriginatorPublicKey };
export const _decode_OriginatorIdentifierOrKey = __utils._decode_inextensible_choice<OriginatorIdentifierOrKey>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "subjectKeyIdentifier", __utils._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier) ],
    "CONTEXT 1": [ "originatorKey", __utils._decode_implicit<OriginatorPublicKey>(() => _decode_OriginatorPublicKey) ]
});
export const _encode_OriginatorIdentifierOrKey = __utils._encode_choice<OriginatorIdentifierOrKey>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "subjectKeyIdentifier": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SubjectKeyIdentifier, __utils.BER),
    "originatorKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_OriginatorPublicKey, __utils.BER),
}, __utils.BER);


export type UserKeyingMaterial = asn1.OCTET_STRING; // OctetStringType
export const _decode_UserKeyingMaterial = __utils._decodeOctetString;
export const _encode_UserKeyingMaterial = __utils._encodeOctetString;


export class OtherKeyAttribute {
    constructor (
        readonly keyAttrId: asn1.OBJECT_IDENTIFIER,
        readonly keyAttr: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyAttrId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("keyAttr", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [
    
];

export const _decode_OtherKeyAttribute = function (el: asn1.ASN1Element): OtherKeyAttribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OtherKeyAttribute contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "keyAttrId";
    sequence[1].name = "keyAttr";
    let keyAttrId!: asn1.OBJECT_IDENTIFIER;
    let keyAttr!: asn1.ASN1Element;
    keyAttrId = __utils._decodeObjectIdentifier(sequence[0]);
    keyAttr = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new OtherKeyAttribute(
        keyAttrId,
        keyAttr,

    );
};
export const _encode_OtherKeyAttribute = function (value: OtherKeyAttribute, elGetter: __utils.ASN1Encoder<OtherKeyAttribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.keyAttrId, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.keyAttr, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class RecipientKeyIdentifier {
    constructor (
        readonly subjectKeyIdentifier: SubjectKeyIdentifier,
        readonly date: asn1.GeneralizedTime | undefined,
        readonly other: OtherKeyAttribute | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("subjectKeyIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("date", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("other", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [
    
];

export const _decode_RecipientKeyIdentifier = function (el: asn1.ASN1Element): RecipientKeyIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subjectKeyIdentifier!: SubjectKeyIdentifier;
    let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let other: asn1.OPTIONAL<OtherKeyAttribute>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "subjectKeyIdentifier": (_el: asn1.ASN1Element): void => { subjectKeyIdentifier = _decode_SubjectKeyIdentifier(_el); },
        "date": (_el: asn1.ASN1Element): void => { date = __utils._decodeGeneralizedTime(_el); },
        "other": (_el: asn1.ASN1Element): void => { other = _decode_OtherKeyAttribute(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecipientKeyIdentifier,
        _extension_additions_list_spec_for_RecipientKeyIdentifier,
        _root_component_type_list_2_spec_for_RecipientKeyIdentifier,
        undefined,
    );
    return new RecipientKeyIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        subjectKeyIdentifier,
        date,
        other
    );
};
export const _encode_RecipientKeyIdentifier = function (value: RecipientKeyIdentifier, elGetter: __utils.ASN1Encoder<RecipientKeyIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectKeyIdentifier(value.subjectKeyIdentifier, __utils.BER),
            /* IF_ABSENT  */ ((value.date === undefined) ? undefined : __utils._encodeGeneralizedTime(value.date, __utils.BER)),
            /* IF_ABSENT  */ ((value.other === undefined) ? undefined : _encode_OtherKeyAttribute(value.other, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KeyAgreeRecipientIdentifier =
    { issuerAndSerialNumber: IssuerAndSerialNumber }
    | { rKeyId: RecipientKeyIdentifier };
export const _decode_KeyAgreeRecipientIdentifier = __utils._decode_inextensible_choice<KeyAgreeRecipientIdentifier>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "rKeyId", __utils._decode_implicit<RecipientKeyIdentifier>(() => _decode_RecipientKeyIdentifier) ]
});
export const _encode_KeyAgreeRecipientIdentifier = __utils._encode_choice<KeyAgreeRecipientIdentifier>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "rKeyId": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_RecipientKeyIdentifier, __utils.BER),
}, __utils.BER);


export class RecipientEncryptedKey {
    constructor (
        readonly rid: KeyAgreeRecipientIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("rid", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("encryptedKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [
    
];

export const _decode_RecipientEncryptedKey = function (el: asn1.ASN1Element): RecipientEncryptedKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("RecipientEncryptedKey contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "rid";
    sequence[1].name = "encryptedKey";
    let rid!: KeyAgreeRecipientIdentifier;
    let encryptedKey!: EncryptedKey;
    rid = _decode_KeyAgreeRecipientIdentifier(sequence[0]);
    encryptedKey = _decode_EncryptedKey(sequence[1]);
    // TODO: Validate values.
    return new RecipientEncryptedKey(
        rid,
        encryptedKey,

    );
};
export const _encode_RecipientEncryptedKey = function (value: RecipientEncryptedKey, elGetter: __utils.ASN1Encoder<RecipientEncryptedKey>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_KeyAgreeRecipientIdentifier(value.rid, __utils.BER),
            /* REQUIRED   */ _encode_EncryptedKey(value.encryptedKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type RecipientEncryptedKeys = RecipientEncryptedKey[]; // SequenceOfType
export const _decode_RecipientEncryptedKeys = __utils._decodeSequenceOf<RecipientEncryptedKey>(() => _decode_RecipientEncryptedKey);
export const _encode_RecipientEncryptedKeys = __utils._encodeSequenceOf<RecipientEncryptedKey>(() => _encode_RecipientEncryptedKey, __utils.BER);


export class KeyAgreeRecipientInfo {
    constructor (
        readonly version: CMSVersion,
        readonly originator: OriginatorIdentifierOrKey,
        readonly ukm: UserKeyingMaterial | undefined,
        readonly keyEncryptionAlgorithm: AlgorithmIdentifier,
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("originator", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("ukm", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("keyEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("recipientEncryptedKeys", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KeyAgreeRecipientInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_KeyAgreeRecipientInfo = function (el: asn1.ASN1Element): KeyAgreeRecipientInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let originator!: OriginatorIdentifierOrKey;
    let ukm: asn1.OPTIONAL<UserKeyingMaterial>;
    let keyEncryptionAlgorithm!: AlgorithmIdentifier;
    let recipientEncryptedKeys!: RecipientEncryptedKeys;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "originator": (_el: asn1.ASN1Element): void => { originator = __utils._decode_explicit<OriginatorIdentifierOrKey>(() => _decode_OriginatorIdentifierOrKey)(_el); },
        "ukm": (_el: asn1.ASN1Element): void => { ukm = __utils._decode_explicit<UserKeyingMaterial>(() => _decode_UserKeyingMaterial)(_el); },
        "keyEncryptionAlgorithm": (_el: asn1.ASN1Element): void => { keyEncryptionAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "recipientEncryptedKeys": (_el: asn1.ASN1Element): void => { recipientEncryptedKeys = _decode_RecipientEncryptedKeys(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo,
        _extension_additions_list_spec_for_KeyAgreeRecipientInfo,
        _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo,
        undefined,
    );
    return new KeyAgreeRecipientInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        originator,
        ukm,
        keyEncryptionAlgorithm,
        recipientEncryptedKeys
    );
};
export const _encode_KeyAgreeRecipientInfo = function (value: KeyAgreeRecipientInfo, elGetter: __utils.ASN1Encoder<KeyAgreeRecipientInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OriginatorIdentifierOrKey, __utils.BER)(value.originator, __utils.BER),
            /* IF_ABSENT  */ ((value.ukm === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_UserKeyingMaterial, __utils.BER)(value.ukm, __utils.BER)),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.keyEncryptionAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_RecipientEncryptedKeys(value.recipientEncryptedKeys, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class KEKIdentifier {
    constructor (
        readonly keyIdentifier: asn1.OCTET_STRING,
        readonly date: asn1.GeneralizedTime | undefined,
        readonly other: OtherKeyAttribute | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_KEKIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("date", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("other", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KEKIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KEKIdentifier: __utils.ComponentSpec[] = [
    
];

export const _decode_KEKIdentifier = function (el: asn1.ASN1Element): KEKIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyIdentifier!: asn1.OCTET_STRING;
    let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let other: asn1.OPTIONAL<OtherKeyAttribute>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "keyIdentifier": (_el: asn1.ASN1Element): void => { keyIdentifier = __utils._decodeOctetString(_el); },
        "date": (_el: asn1.ASN1Element): void => { date = __utils._decodeGeneralizedTime(_el); },
        "other": (_el: asn1.ASN1Element): void => { other = _decode_OtherKeyAttribute(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KEKIdentifier,
        _extension_additions_list_spec_for_KEKIdentifier,
        _root_component_type_list_2_spec_for_KEKIdentifier,
        undefined,
    );
    return new KEKIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        keyIdentifier,
        date,
        other
    );
};
export const _encode_KEKIdentifier = function (value: KEKIdentifier, elGetter: __utils.ASN1Encoder<KEKIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeOctetString(value.keyIdentifier, __utils.BER),
            /* IF_ABSENT  */ ((value.date === undefined) ? undefined : __utils._encodeGeneralizedTime(value.date, __utils.BER)),
            /* IF_ABSENT  */ ((value.other === undefined) ? undefined : _encode_OtherKeyAttribute(value.other, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_KeyEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_KeyEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;


export class KEKRecipientInfo {
    constructor (
        readonly version: CMSVersion,
        readonly kekid: KEKIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KEKRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("kekid", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("keyEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KEKRecipientInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KEKRecipientInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_KEKRecipientInfo = function (el: asn1.ASN1Element): KEKRecipientInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError("KEKRecipientInfo contained only " + sequence.length.toString() + " elements.");
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
    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(sequence[2]);
    encryptedKey = _decode_EncryptedKey(sequence[3]);
    // TODO: Validate values.
    return new KEKRecipientInfo(
        version,
        kekid,
        keyEncryptionAlgorithm,
        encryptedKey,

    );
};
export const _encode_KEKRecipientInfo = function (value: KEKRecipientInfo, elGetter: __utils.ASN1Encoder<KEKRecipientInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ _encode_KEKIdentifier(value.kekid, __utils.BER),
            /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(value.keyEncryptionAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_EncryptedKey(value.encryptedKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KeyDerivationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_KeyDerivationAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_KeyDerivationAlgorithmIdentifier = _encode_AlgorithmIdentifier;


export class PasswordRecipientInfo {
    constructor (
        readonly version: CMSVersion,
        readonly keyDerivationAlgorithm: KeyDerivationAlgorithmIdentifier | undefined,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_PasswordRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("keyDerivationAlgorithm", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("keyEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PasswordRecipientInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PasswordRecipientInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_PasswordRecipientInfo = function (el: asn1.ASN1Element): PasswordRecipientInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let keyDerivationAlgorithm: asn1.OPTIONAL<KeyDerivationAlgorithmIdentifier>;
    let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
    let encryptedKey!: EncryptedKey;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "keyDerivationAlgorithm": (_el: asn1.ASN1Element): void => { keyDerivationAlgorithm = __utils._decode_implicit<KeyDerivationAlgorithmIdentifier>(() => _decode_KeyDerivationAlgorithmIdentifier)(_el); },
        "keyEncryptionAlgorithm": (_el: asn1.ASN1Element): void => { keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(_el); },
        "encryptedKey": (_el: asn1.ASN1Element): void => { encryptedKey = _decode_EncryptedKey(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PasswordRecipientInfo,
        _extension_additions_list_spec_for_PasswordRecipientInfo,
        _root_component_type_list_2_spec_for_PasswordRecipientInfo,
        undefined,
    );
    return new PasswordRecipientInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        keyDerivationAlgorithm,
        keyEncryptionAlgorithm,
        encryptedKey
    );
};
export const _encode_PasswordRecipientInfo = function (value: PasswordRecipientInfo, elGetter: __utils.ASN1Encoder<PasswordRecipientInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* IF_ABSENT  */ ((value.keyDerivationAlgorithm === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_KeyDerivationAlgorithmIdentifier, __utils.BER)(value.keyDerivationAlgorithm, __utils.BER)),
            /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(value.keyEncryptionAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_EncryptedKey(value.encryptedKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class OtherRecipientInfo {
    constructor (
        readonly oriType: asn1.OBJECT_IDENTIFIER,
        readonly oriValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("oriType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("oriValue", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherRecipientInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OtherRecipientInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_OtherRecipientInfo = function (el: asn1.ASN1Element): OtherRecipientInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OtherRecipientInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "oriType";
    sequence[1].name = "oriValue";
    let oriType!: asn1.OBJECT_IDENTIFIER;
    let oriValue!: asn1.ASN1Element;
    oriType = __utils._decodeObjectIdentifier(sequence[0]);
    oriValue = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new OtherRecipientInfo(
        oriType,
        oriValue,

    );
};
export const _encode_OtherRecipientInfo = function (value: OtherRecipientInfo, elGetter: __utils.ASN1Encoder<OtherRecipientInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.oriType, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.oriValue, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type RecipientInfo =
    { ktri: KeyTransRecipientInfo }
    | asn1.ASN1Element;
export const _decode_RecipientInfo = __utils._decode_extensible_choice<RecipientInfo>({
    "UNIVERSAL 16": [ "ktri", _decode_KeyTransRecipientInfo ],
    "CONTEXT 1": [ "kari", __utils._decode_implicit<KeyAgreeRecipientInfo>(() => _decode_KeyAgreeRecipientInfo) ],
    "CONTEXT 2": [ "kekri", __utils._decode_implicit<KEKRecipientInfo>(() => _decode_KEKRecipientInfo) ],
    "CONTEXT 3": [ "pwri", __utils._decode_implicit<PasswordRecipientInfo>(() => _decode_PasswordRecipientInfo) ],
    "CONTEXT 4": [ "ori", __utils._decode_implicit<OtherRecipientInfo>(() => _decode_OtherRecipientInfo) ]
});
export const _encode_RecipientInfo = __utils._encode_choice<RecipientInfo>({
    "ktri": _encode_KeyTransRecipientInfo,
    "kari": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_KeyAgreeRecipientInfo, __utils.BER),
    "kekri": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_KEKRecipientInfo, __utils.BER),
    "pwri": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_PasswordRecipientInfo, __utils.BER),
    "ori": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_OtherRecipientInfo, __utils.BER),
}, __utils.BER);


export type RecipientInfos = RecipientInfo[]; // SetOfType
export const _decode_RecipientInfos = __utils._decodeSetOf<RecipientInfo>(() => _decode_RecipientInfo);
export const _encode_RecipientInfos = __utils._encodeSetOf<RecipientInfo>(() => _encode_RecipientInfo, __utils.BER);


export type ContentEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_ContentEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_ContentEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;


export class EncryptedContentInfo {
    constructor (
        readonly contentType: asn1.OBJECT_IDENTIFIER,
        readonly contentEncryptionAlgorithm: ContentEncryptionAlgorithmIdentifier,
        readonly encryptedContent: asn1.OCTET_STRING | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contentType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("contentEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedContent", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_EncryptedContentInfo = function (el: asn1.ASN1Element): EncryptedContentInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let contentType!: asn1.OBJECT_IDENTIFIER;
    let contentEncryptionAlgorithm!: ContentEncryptionAlgorithmIdentifier;
    let encryptedContent: asn1.OPTIONAL<asn1.OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "contentType": (_el: asn1.ASN1Element): void => { contentType = __utils._decodeObjectIdentifier(_el); },
        "contentEncryptionAlgorithm": (_el: asn1.ASN1Element): void => { contentEncryptionAlgorithm = _decode_ContentEncryptionAlgorithmIdentifier(_el); },
        "encryptedContent": (_el: asn1.ASN1Element): void => { encryptedContent = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptedContentInfo,
        _extension_additions_list_spec_for_EncryptedContentInfo,
        _root_component_type_list_2_spec_for_EncryptedContentInfo,
        undefined,
    );
    return new EncryptedContentInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        contentType,
        contentEncryptionAlgorithm,
        encryptedContent
    );
};
export const _encode_EncryptedContentInfo = function (value: EncryptedContentInfo, elGetter: __utils.ASN1Encoder<EncryptedContentInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.contentType, __utils.BER),
            /* REQUIRED   */ _encode_ContentEncryptionAlgorithmIdentifier(value.contentEncryptionAlgorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.encryptedContent === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER)(value.encryptedContent, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class EnvelopedData {
    constructor (
        readonly version: CMSVersion,
        readonly originatorInfo: OriginatorInfo | undefined,
        readonly recipientInfos: RecipientInfos,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttrs: Attributes | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("originatorInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("recipientInfos", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("encryptedContentInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EnvelopedData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("unprotectedAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), 0, 2)
];

export const _decode_EnvelopedData = function (el: asn1.ASN1Element): EnvelopedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
    let recipientInfos!: RecipientInfos;
    let encryptedContentInfo!: EncryptedContentInfo;
    let unprotectedAttrs: asn1.OPTIONAL<Attributes>; // Only present in version 2 and higher.
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "originatorInfo": (_el: asn1.ASN1Element): void => { originatorInfo = __utils._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfos": (_el: asn1.ASN1Element): void => { recipientInfos = _decode_RecipientInfos(_el); },
        "encryptedContentInfo": (_el: asn1.ASN1Element): void => { encryptedContentInfo = _decode_EncryptedContentInfo(_el); },
        "unprotectedAttrs": (_el: asn1.ASN1Element): void => { unprotectedAttrs = __utils._decode_implicit<Attributes>(() => _decode_Attributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnvelopedData,
        _extension_additions_list_spec_for_EnvelopedData,
        _root_component_type_list_2_spec_for_EnvelopedData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EnvelopedData( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        originatorInfo,
        recipientInfos,
        encryptedContentInfo,
        unprotectedAttrs,
        _unrecognizedExtensionsList
    );
};
export const _encode_EnvelopedData = function (value: EnvelopedData, elGetter: __utils.ASN1Encoder<EnvelopedData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* IF_ABSENT  */ ((value.originatorInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_OriginatorInfo, __utils.BER)(value.originatorInfo, __utils.BER)),
            /* REQUIRED   */ _encode_RecipientInfos(value.recipientInfos, __utils.BER),
            /* REQUIRED   */ _encode_EncryptedContentInfo(value.encryptedContentInfo, __utils.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.unprotectedAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Attributes, __utils.BER)(value.unprotectedAttrs, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: UnprotectedAttributes

// TODO: ObjectSetAssignment: KeyTransportAlgorithmSet

// TODO: ObjectSetAssignment: KeyAgreementAlgorithmSet

// TODO: ObjectSetAssignment: OriginatorKeySet

// TODO: ObjectClassAssignment: OTHER-RECIPIENT

// TODO: ObjectSetAssignment: SupportedOtherRecipInfo

export type Digest = asn1.OCTET_STRING; // OctetStringType
export const _decode_Digest = __utils._decodeOctetString;
export const _encode_Digest = __utils._encodeOctetString;


export class DigestedData {
    constructor (
        readonly version: CMSVersion,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly digest: Digest,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("digestAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encapContentInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("digest", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DigestedData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DigestedData: __utils.ComponentSpec[] = [
    
];

export const _decode_DigestedData = function (el: asn1.ASN1Element): DigestedData {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError("DigestedData contained only " + sequence.length.toString() + " elements.");
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
        digest,
        sequence.slice(4),
    );
};
export const _encode_DigestedData = function (value: DigestedData, elGetter: __utils.ASN1Encoder<DigestedData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.digestAlgorithm, __utils.BER),
            /* REQUIRED   */ _encode_EncapsulatedContentInfo(value.encapContentInfo, __utils.BER),
            /* REQUIRED   */ _encode_Digest(value.digest, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class EncryptedData {
    constructor (
        readonly version: CMSVersion,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttrs: Attributes | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("encryptedContentInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("unprotectedAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), 0, 2)
];

export const _decode_EncryptedData = function (el: asn1.ASN1Element): EncryptedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let encryptedContentInfo!: EncryptedContentInfo;
    let unprotectedAttrs: asn1.OPTIONAL<Attributes>; // Only present in version 2 and higher.
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "encryptedContentInfo": (_el: asn1.ASN1Element): void => { encryptedContentInfo = _decode_EncryptedContentInfo(_el); },
        "unprotectedAttrs": (_el: asn1.ASN1Element): void => { unprotectedAttrs = __utils._decode_implicit<Attributes>(() => _decode_Attributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptedData,
        _extension_additions_list_spec_for_EncryptedData,
        _root_component_type_list_2_spec_for_EncryptedData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EncryptedData( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        encryptedContentInfo,
        unprotectedAttrs,
        _unrecognizedExtensionsList
    );
};
export const _encode_EncryptedData = function (value: EncryptedData, elGetter: __utils.ASN1Encoder<EncryptedData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* REQUIRED   */ _encode_EncryptedContentInfo(value.encryptedContentInfo, __utils.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.unprotectedAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Attributes, __utils.BER)(value.unprotectedAttrs, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type MessageAuthenticationCodeAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_MessageAuthenticationCodeAlgorithm = _decode_AlgorithmIdentifier;
export const _encode_MessageAuthenticationCodeAlgorithm = _encode_AlgorithmIdentifier;


export type AuthAttributes = Attribute[]; // SetOfType
export const _decode_AuthAttributes = __utils._decodeSetOf<Attribute>(() => _decode_Attribute);
export const _encode_AuthAttributes = __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER);


export type MessageAuthenticationCode = asn1.OCTET_STRING; // OctetStringType
export const _decode_MessageAuthenticationCode = __utils._decodeOctetString;
export const _encode_MessageAuthenticationCode = __utils._encodeOctetString;


export class AuthenticatedData {
    constructor (
        readonly version: CMSVersion,
        readonly originatorInfo: OriginatorInfo | undefined,
        readonly recipientInfos: RecipientInfos,
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithm,
        readonly digestAlgorithm: DigestAlgorithmIdentifier | undefined,
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly authAttrs: AuthAttributes | undefined,
        readonly mac: MessageAuthenticationCode,
        readonly unauthAttrs: UnauthAttributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("originatorInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("recipientInfos", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("macAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("digestAlgorithm", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("encapContentInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("authAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("mac", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("unauthAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [
    
];

export const _decode_AuthenticatedData = function (el: asn1.ASN1Element): AuthenticatedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: CMSVersion;
    let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
    let recipientInfos!: RecipientInfos;
    let macAlgorithm!: MessageAuthenticationCodeAlgorithm;
    let digestAlgorithm: asn1.OPTIONAL<DigestAlgorithmIdentifier>;
    let encapContentInfo!: EncapsulatedContentInfo;
    let authAttrs: asn1.OPTIONAL<AuthAttributes>;
    let mac!: MessageAuthenticationCode;
    let unauthAttrs: asn1.OPTIONAL<UnauthAttributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_CMSVersion(_el); },
        "originatorInfo": (_el: asn1.ASN1Element): void => { originatorInfo = __utils._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfos": (_el: asn1.ASN1Element): void => { recipientInfos = _decode_RecipientInfos(_el); },
        "macAlgorithm": (_el: asn1.ASN1Element): void => { macAlgorithm = _decode_MessageAuthenticationCodeAlgorithm(_el); },
        "digestAlgorithm": (_el: asn1.ASN1Element): void => { digestAlgorithm = __utils._decode_implicit<DigestAlgorithmIdentifier>(() => _decode_DigestAlgorithmIdentifier)(_el); },
        "encapContentInfo": (_el: asn1.ASN1Element): void => { encapContentInfo = _decode_EncapsulatedContentInfo(_el); },
        "authAttrs": (_el: asn1.ASN1Element): void => { authAttrs = __utils._decode_implicit<AuthAttributes>(() => _decode_AuthAttributes)(_el); },
        "mac": (_el: asn1.ASN1Element): void => { mac = _decode_MessageAuthenticationCode(_el); },
        "unauthAttrs": (_el: asn1.ASN1Element): void => { unauthAttrs = __utils._decode_implicit<UnauthAttributes>(() => _decode_UnauthAttributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthenticatedData,
        _extension_additions_list_spec_for_AuthenticatedData,
        _root_component_type_list_2_spec_for_AuthenticatedData,
        undefined,
    );
    return new AuthenticatedData( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        originatorInfo,
        recipientInfos,
        macAlgorithm,
        digestAlgorithm,
        encapContentInfo,
        authAttrs,
        mac,
        unauthAttrs
    );
};
export const _encode_AuthenticatedData = function (value: AuthenticatedData, elGetter: __utils.ASN1Encoder<AuthenticatedData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, __utils.BER),
            /* IF_ABSENT  */ ((value.originatorInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_OriginatorInfo, __utils.BER)(value.originatorInfo, __utils.BER)),
            /* REQUIRED   */ _encode_RecipientInfos(value.recipientInfos, __utils.BER),
            /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithm(value.macAlgorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.digestAlgorithm === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_DigestAlgorithmIdentifier, __utils.BER)(value.digestAlgorithm, __utils.BER)),
            /* REQUIRED   */ _encode_EncapsulatedContentInfo(value.encapContentInfo, __utils.BER),
            /* IF_ABSENT  */ ((value.authAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_AuthAttributes, __utils.BER)(value.authAttrs, __utils.BER)),
            /* REQUIRED   */ _encode_MessageAuthenticationCode(value.mac, __utils.BER),
            /* IF_ABSENT  */ ((value.unauthAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_UnauthAttributes, __utils.BER)(value.unauthAttrs, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: AuthAttributeSet

// TODO: ObjectSetAssignment: UnauthAttributeSet

// TODO: ObjectSetAssignment: DigestAlgorithmSet

// TODO: ObjectSetAssignment: SignatureAlgorithmSet

// TODO: ObjectSetAssignment: KeyEncryptionAlgorithmSet

// TODO: ObjectSetAssignment: ContentEncryptionAlgorithmSet

// TODO: ObjectSetAssignment: MessageAuthenticationCodeAlgorithmSet

// TODO: ObjectClassAssignment: OTHER-REVOK-INFO

// TODO: ObjectSetAssignment: SupportedOtherRevokInfo

// TODO: ObjectClassAssignment: OTHER-CERT-FMT

// TODO: ObjectSetAssignment: SupportedCertFormats

// TODO: ObjectClassAssignment: KEY-ATTRIBUTE

// TODO: ObjectSetAssignment: SupportedKeyAttributes

export const id_ct_contentInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    6,
]);

// TODO: ObjectClassAssignment: CONTENT-TYPE

// TODO: ObjectAssignment: ct-Data

export const id_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    1,
]);

// TODO: ObjectAssignment: ct-SignedData

export const id_signedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

// TODO: ObjectAssignment: ct-EnvelopedData

export const id_envelopedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    3,
]);

// TODO: ObjectAssignment: ct-DigestedData

export const id_digestedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    5,
]);

// TODO: ObjectAssignment: ct-EncryptedData

export const id_encryptedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    6,
]);

// TODO: ObjectAssignment: ct-AuthenticatedData

export const id_ct_authData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    2,
]);

export type MessageDigest = asn1.OCTET_STRING; // OctetStringType
export const _decode_MessageDigest = __utils._decodeOctetString;
export const _encode_MessageDigest = __utils._encodeOctetString;


export type Time =
    { utcTime: asn1.UTCTime }
    | { generalTime: asn1.GeneralizedTime };
export const _decode_Time = __utils._decode_inextensible_choice<Time>({
    "UNIVERSAL 23": [ "utcTime", __utils._decodeUTCTime ],
    "UNIVERSAL 24": [ "generalTime", __utils._decodeGeneralizedTime ]
});
export const _encode_Time = __utils._encode_choice<Time>({
    "utcTime": __utils._encodeUTCTime,
    "generalTime": __utils._encodeGeneralizedTime,
}, __utils.BER);


export type SigningTime = Time; // DefinedType
export const _decode_SigningTime = _decode_Time;
export const _encode_SigningTime = _encode_Time;


export type Countersignature = SignerInfo; // DefinedType
export const _decode_Countersignature = _decode_SignerInfo;
export const _encode_Countersignature = _encode_SignerInfo;


// TODO: ObjectAssignment: aa-contentType

export const id_contentType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    3,
]);

// TODO: ObjectAssignment: aa-messageDigest

export const id_messageDigest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    4,
]);

// TODO: ObjectAssignment: aa-signingTime

export const id_signingTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    5,
]);

// TODO: ObjectAssignment: aa-countersignature

export const id_countersignature: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    6,
]);

export type ExtendedCertificateOrCertificate =
    { certificate: Certificate }
    | { extendedCertificate: ExtendedCertificate };
export const _decode_ExtendedCertificateOrCertificate = __utils._decode_inextensible_choice<ExtendedCertificateOrCertificate>({
    /* NO_TAG_OR_TAG_CLASS */: [ "certificate", _decode_Certificate ],
    "CONTEXT 0": [ "extendedCertificate", __utils._decode_implicit<ExtendedCertificate>(() => _decode_ExtendedCertificate) ]
});
export const _encode_ExtendedCertificateOrCertificate = __utils._encode_choice<ExtendedCertificateOrCertificate>({
    "certificate": _encode_Certificate,
    "extendedCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_ExtendedCertificate, __utils.BER),
}, __utils.BER);


/* END_MODULE CryptographicMessageSyntax-2009 */

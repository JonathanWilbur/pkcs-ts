/*
    BEGIN_MODULE PKCS-9
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.modules.pkcs-9
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    Extensions,
    Time,
    _decode_Extensions,
    _decode_Time,
    _encode_Extensions,
    _encode_Time,
} from "./AuthenticationFramework";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "./SelectedAttributeTypes";
import { ub_name } from "./UpperBounds";
import { id_at } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    ALGORITHM,
    Extensions,
    Time,
    _decode_Extensions,
    _decode_Time,
    _encode_Extensions,
    _encode_Time,
} from "./AuthenticationFramework";
export {
    ContentInfo,
    SignerInfo,
    _decode_ContentInfo,
    _decode_SignerInfo,
    _encode_ContentInfo,
    _encode_SignerInfo,
} from "./CryptographicMessageSyntax";
export {
    ATTRIBUTE,
    Attribute,
    MATCHING_RULE,
    objectIdentifierMatch,
    OBJECT_CLASS,
    top,
    _decode_Attribute,
    _encode_Attribute,
} from "./InformationFramework";
export { PFX, _decode_PFX, _encode_PFX } from "./PKCS-12";
export {
    PKCS15Token,
    _decode_PKCS15Token,
    _encode_PKCS15Token,
} from "./PKCS-15";
export {
    EncryptedPrivateKeyInfo,
    _decode_EncryptedPrivateKeyInfo,
    _encode_EncryptedPrivateKeyInfo,
} from "./PKCS-8";
export {
    caseExactMatch,
    caseIgnoreMatch,
    DirectoryString,
    generalizedTimeMatch,
    integerMatch,
    octetStringMatch,
    serialNumber,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "./SelectedAttributeTypes";
export { ub_name } from "./UpperBounds";
export {
    authenticationFramework,
    id_at,
    informationFramework,
    selectedAttributeTypes,
    upperBounds,
} from "./UsefulDefinitions";

export const pkcs_9_ub_pkcs9String: asn1.INTEGER = 255;

export const pkcs_9_ub_emailAddress: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_unstructuredName: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_unstructuredAddress: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_challengePassword: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_friendlyName: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_signingDescription: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_match: asn1.INTEGER = pkcs_9_ub_pkcs9String;

export const pkcs_9_ub_pseudonym: asn1.INTEGER = ub_name;

export const pkcs_9_ub_placeOfBirth: asn1.INTEGER = ub_name;

export const pkcs_9: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    9,
]);

export const pkcs_9_mo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    pkcs_9
);

export const pkcs_9_oc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    pkcs_9
);

export const pkcs_9_at: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    pkcs_9
);

export const pkcs_9_sx: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    pkcs_9
);

export const pkcs_9_mr: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    pkcs_9
);

export const pkcs_9_oc_pkcsEntity: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_9_oc
);

export const pkcs_9_oc_naturalPerson: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_9_oc
);

export const pkcs_9_at_emailAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_9
);

export const pkcs_9_at_unstructuredName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_9
);

export const pkcs_9_at_contentType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    pkcs_9
);

export const pkcs_9_at_messageDigest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    pkcs_9
);

export const pkcs_9_at_signingTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    pkcs_9
);

export const pkcs_9_at_counterSignature: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    pkcs_9
);

export const pkcs_9_at_challengePassword: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    pkcs_9
);

export const pkcs_9_at_unstructuredAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    pkcs_9
);

export const pkcs_9_at_extendedCertificateAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    pkcs_9
);

export const pkcs_9_at_signingDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    pkcs_9
);

export const pkcs_9_at_extensionRequest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    pkcs_9
);

export const pkcs_9_at_smimeCapabilities: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    pkcs_9
);

export const pkcs_9_at_friendlyName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    pkcs_9
);

export const pkcs_9_at_localKeyId: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    pkcs_9
);

export const pkcs_9_at_userPKCS12: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2, 16, 840, 1, 113730, 3, 1, 216]
);

export const pkcs_9_at_pkcs15Token: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_9_at
);

export const pkcs_9_at_encryptedPrivateKeyInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_9_at
);

export const pkcs_9_at_randomNonce: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    pkcs_9_at
);

export const pkcs_9_at_sequenceNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    pkcs_9_at
);

export const pkcs_9_at_pkcs7PDU: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    pkcs_9_at
);

export const ietf_at: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
    3,
    6,
    1,
    5,
    5,
    7,
    9,
]);

export const pkcs_9_at_dateOfBirth: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    ietf_at
);

export const pkcs_9_at_placeOfBirth: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    ietf_at
);

export const pkcs_9_at_gender: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    ietf_at
);

export const pkcs_9_at_countryOfCitizenship: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    ietf_at
);

export const pkcs_9_at_countryOfResidence: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    ietf_at
);

export const pkcs_9_sx_pkcs9String: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_9_sx
);

export const pkcs_9_sx_signingTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_9_sx
);

export const pkcs_9_mr_caseIgnoreMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_9_mr
);

export const pkcs_9_mr_signingTimeMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_9_mr
);

export const smime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    pkcs_9
);

export const certTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [22],
    pkcs_9
);

export const crlTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    pkcs_9
);

export const id_at_pseudonym: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [65],
    id_at
);

export type PKCS9String =
    | { ia5String: asn1.IA5String }
    | { directoryString: DirectoryString };
export const _decode_PKCS9String = __utils._decode_inextensible_choice<
    PKCS9String
>({
    "UNIVERSAL 22": ["ia5String", __utils._decodeIA5String],
    "UNIVERSAL 12": ["directoryString", _decode_DirectoryString],
    "UNIVERSAL 19": ["directoryString", _decode_DirectoryString],
    "UNIVERSAL 20": ["directoryString", _decode_DirectoryString],
    "UNIVERSAL 28": ["directoryString", _decode_DirectoryString],
    "UNIVERSAL 30": ["directoryString", _decode_DirectoryString],
});
export const _encode_PKCS9String = __utils._encode_choice<PKCS9String>(
    {
        ia5String: __utils._encodeIA5String,
        directoryString: _encode_DirectoryString,
    },
    __utils.BER
);

// TODO: ObjectAssignment: pkcsEntity

// TODO: ObjectAssignment: naturalPerson

// TODO: ObjectSetAssignment: PKCSEntityAttributeSet

// TODO: ObjectSetAssignment: NaturalPersonAttributeSet

// TODO: ObjectAssignment: pKCS7PDU

// TODO: ObjectAssignment: userPKCS12

// TODO: ObjectAssignment: pKCS15Token

// TODO: ObjectAssignment: encryptedPrivateKeyInfo

// TODO: ObjectAssignment: emailAddress

// TODO: ObjectAssignment: unstructuredName

// TODO: ObjectAssignment: unstructuredAddress

// TODO: ObjectAssignment: dateOfBirth

// TODO: ObjectAssignment: placeOfBirth

// TODO: ObjectAssignment: gender

// TODO: ObjectAssignment: countryOfCitizenship

// TODO: ObjectAssignment: countryOfResidence

// TODO: ObjectAssignment: pseudonym

// TODO: ObjectAssignment: contentType

export type ContentType = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ContentType = __utils._decodeObjectIdentifier;
export const _encode_ContentType = __utils._encodeObjectIdentifier;

// TODO: ObjectAssignment: messageDigest

export type MessageDigest = asn1.OCTET_STRING; // OctetStringType
export const _decode_MessageDigest = __utils._decodeOctetString;
export const _encode_MessageDigest = __utils._encodeOctetString;

// TODO: ObjectAssignment: signingTime

export type SigningTime = Time; // DefinedType
export const _decode_SigningTime = _decode_Time;
export const _encode_SigningTime = _encode_Time;

// TODO: ObjectAssignment: randomNonce

export type RandomNonce = asn1.OCTET_STRING; // OctetStringType
export const _decode_RandomNonce = __utils._decodeOctetString;
export const _encode_RandomNonce = __utils._encodeOctetString;

// TODO: ObjectAssignment: sequenceNumber

export type SequenceNumber = asn1.INTEGER;
export const _decode_SequenceNumber = __utils._decodeInteger;
export const _encode_SequenceNumber = __utils._encodeInteger;

// TODO: ObjectAssignment: counterSignature

// TODO: ObjectAssignment: challengePassword

// TODO: ObjectAssignment: extensionRequest

export type ExtensionRequest = Extensions; // DefinedType
export const _decode_ExtensionRequest = _decode_Extensions;
export const _encode_ExtensionRequest = _encode_Extensions;

// TODO: ObjectAssignment: extendedCertificateAttributes

// TODO: ObjectAssignment: friendlyName

// TODO: ObjectAssignment: localKeyId

// TODO: ObjectAssignment: signingDescription

// TODO: ObjectAssignment: smimeCapabilities

export class SMIMECapability {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SMIMECapability: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SMIMECapability: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SMIMECapability: __utils.ComponentSpec[] = [];

export const _decode_SMIMECapability = function (
    el: asn1.ASN1Element
): SMIMECapability {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "SMIMECapability contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "parameters";
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters!: asn1.ASN1Element;
    algorithm = __utils._decodeObjectIdentifier(sequence[0]);
    parameters = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new SMIMECapability(algorithm, parameters);
};
export const _encode_SMIMECapability = function (
    value: SMIMECapability,
    elGetter: __utils.ASN1Encoder<SMIMECapability>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.algorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeAny(
                    value.parameters,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type SMIMECapabilities = SMIMECapability[]; // SequenceOfType
export const _decode_SMIMECapabilities = __utils._decodeSequenceOf<
    SMIMECapability
>(() => _decode_SMIMECapability);
export const _encode_SMIMECapabilities = __utils._encodeSequenceOf<
    SMIMECapability
>(() => _encode_SMIMECapability, __utils.BER);

// TODO: ObjectSetAssignment: SMIMEv3Algorithms

// TODO: ObjectAssignment: pkcs9CaseIgnoreMatch

// TODO: ObjectAssignment: signingTimeMatch

/* END_MODULE PKCS-9 */

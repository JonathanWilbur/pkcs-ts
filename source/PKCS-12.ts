/*
    BEGIN_MODULE PKCS-12
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-12.modules.pkcs-12
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    ContentInfo,
    DigestInfo,
    _decode_ContentInfo,
    _decode_DigestInfo,
    _encode_ContentInfo,
    _encode_DigestInfo,
} from "./PKCS-7";
import {
    EncryptedPrivateKeyInfo,
    PrivateKeyInfo,
    _decode_EncryptedPrivateKeyInfo,
    _decode_PrivateKeyInfo,
    _encode_EncryptedPrivateKeyInfo,
    _encode_PrivateKeyInfo,
} from "./PKCS-8";
import * as __utils from "./__utils";
export { ATTRIBUTE } from "./InformationFramework";
export {
    ContentInfo,
    DigestInfo,
    _decode_ContentInfo,
    _decode_DigestInfo,
    _encode_ContentInfo,
    _encode_DigestInfo,
} from "./PKCS-7";
export {
    EncryptedPrivateKeyInfo,
    PrivateKeyInfo,
    _decode_EncryptedPrivateKeyInfo,
    _decode_PrivateKeyInfo,
    _encode_EncryptedPrivateKeyInfo,
    _encode_PrivateKeyInfo,
} from "./PKCS-8";
export {
    certTypes,
    crlTypes,
    friendlyName,
    localKeyId,
    pkcs_9,
} from "./PKCS-9";
export { informationFramework } from "./UsefulDefinitions";

export const rsadsi: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
]);

export const pkcs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* pkcs */ 1],
    rsadsi
);

export const pkcs_12: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    pkcs
);

export const pkcs_12PbeIds: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_12
);

export const pbeWithSHAAnd128BitRC4: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_12PbeIds
);

export const pbeWithSHAAnd40BitRC4: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_12PbeIds
);

export const pbeWithSHAAnd3_KeyTripleDES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    pkcs_12PbeIds
);

export const pbeWithSHAAnd2_KeyTripleDES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    pkcs_12PbeIds
);

export const pbeWithSHAAnd128BitRC2_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    pkcs_12PbeIds
);

export const pbewithSHAAnd40BitRC2_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    pkcs_12PbeIds
);

export const bagtypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10, 1],
    pkcs_12
);

export type PFX_version = asn1.INTEGER;
export const PFX_version_v3: PFX_version = 3; /* LONG_NAMED_INTEGER_VALUE */
export const v3: PFX_version = PFX_version_v3; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PFX_version = __utils._decodeInteger;
export const _encode_PFX_version = __utils._encodeInteger;

export class MacData {
    constructor(
        readonly mac: DigestInfo,
        readonly macSalt: asn1.OCTET_STRING,
        readonly iterations: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_MacData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mac",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "macSalt",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iterations",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MacData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MacData: __utils.ComponentSpec[] = [];
export const _default_value_for_MacData__iterations = 1;
export const _decode_MacData = function (el: asn1.ASN1Element): MacData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mac!: DigestInfo;
    let macSalt!: asn1.OCTET_STRING;
    let iterations: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_MacData__iterations;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        mac: (_el: asn1.ASN1Element): void => {
            mac = _decode_DigestInfo(_el);
        },
        macSalt: (_el: asn1.ASN1Element): void => {
            macSalt = __utils._decodeOctetString(_el);
        },
        iterations: (_el: asn1.ASN1Element): void => {
            iterations = __utils._decodeInteger(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_MacData,
        _extension_additions_list_spec_for_MacData,
        _root_component_type_list_2_spec_for_MacData,
        undefined
    );
    return new MacData /* SEQUENCE_CONSTRUCTOR_CALL */(
        mac,
        macSalt,
        iterations
    );
};
export const _encode_MacData = function (
    value: MacData,
    elGetter: __utils.ASN1Encoder<MacData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_DigestInfo(value.mac, __utils.BER),
                /* REQUIRED   */ __utils._encodeOctetString(
                    value.macSalt,
                    __utils.BER
                ),
                /* IF_DEFAULT */ value.iterations === undefined ||
                __utils.deepEq(
                    value.iterations,
                    _default_value_for_MacData__iterations
                )
                    ? undefined
                    : __utils._encodeInteger(value.iterations, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class PFX {
    constructor(
        readonly version: PFX_version,
        readonly authSafe: ContentInfo,
        readonly macData: MacData | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_PFX: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authSafe",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "macData",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PFX: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PFX: __utils.ComponentSpec[] = [];

export const _decode_PFX = function (el: asn1.ASN1Element): PFX {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: PFX_version;
    let authSafe!: ContentInfo;
    let macData: asn1.OPTIONAL<MacData>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_PFX_version(_el);
        },
        authSafe: (_el: asn1.ASN1Element): void => {
            authSafe = _decode_ContentInfo(_el);
        },
        macData: (_el: asn1.ASN1Element): void => {
            macData = _decode_MacData(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PFX,
        _extension_additions_list_spec_for_PFX,
        _root_component_type_list_2_spec_for_PFX,
        undefined
    );
    return new PFX /* SEQUENCE_CONSTRUCTOR_CALL */(version, authSafe, macData);
};
export const _encode_PFX = function (
    value: PFX,
    elGetter: __utils.ASN1Encoder<PFX>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_PFX_version(
                    value.version,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_ContentInfo(
                    value.authSafe,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.macData === undefined
                    ? undefined
                    : _encode_MacData(value.macData, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type AuthenticatedSafe = ContentInfo[]; // SequenceOfType
export const _decode_AuthenticatedSafe = __utils._decodeSequenceOf<ContentInfo>(
    () => _decode_ContentInfo
);
export const _encode_AuthenticatedSafe = __utils._encodeSequenceOf<ContentInfo>(
    () => _encode_ContentInfo,
    __utils.BER
);

export class PKCS12Attribute {
    constructor(
        readonly attrId: asn1.OBJECT_IDENTIFIER,
        readonly attrValues: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PKCS12Attribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attrId",
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
export const _root_component_type_list_2_spec_for_PKCS12Attribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PKCS12Attribute: __utils.ComponentSpec[] = [];

export const _decode_PKCS12Attribute = function (
    el: asn1.ASN1Element
): PKCS12Attribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "PKCS12Attribute contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "attrId";
    sequence[1].name = "attrValues";
    let attrId!: asn1.OBJECT_IDENTIFIER;
    let attrValues!: asn1.ASN1Element[];
    attrId = __utils._decodeObjectIdentifier(sequence[0]);
    attrValues = __utils._decodeSetOf<asn1.ASN1Element>(
        () => __utils._decodeAny
    )(sequence[1]);
    // TODO: Validate values.
    return new PKCS12Attribute(attrId, attrValues);
};
export const _encode_PKCS12Attribute = function (
    value: PKCS12Attribute,
    elGetter: __utils.ASN1Encoder<PKCS12Attribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.attrId,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.attrValues, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class SafeBag {
    constructor(
        readonly bagId: asn1.OBJECT_IDENTIFIER,
        readonly bagValue: asn1.ASN1Element,
        readonly bagAttributes: PKCS12Attribute[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SafeBag: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bagId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bagValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bagAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SafeBag: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SafeBag: __utils.ComponentSpec[] = [];

export const _decode_SafeBag = function (el: asn1.ASN1Element): SafeBag {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let bagId!: asn1.OBJECT_IDENTIFIER;
    let bagValue!: asn1.ASN1Element;
    let bagAttributes: asn1.OPTIONAL<PKCS12Attribute[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        bagId: (_el: asn1.ASN1Element): void => {
            bagId = __utils._decodeObjectIdentifier(_el);
        },
        bagValue: (_el: asn1.ASN1Element): void => {
            bagValue = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(_el);
        },
        bagAttributes: (_el: asn1.ASN1Element): void => {
            bagAttributes = __utils._decodeSetOf<PKCS12Attribute>(
                () => _decode_PKCS12Attribute
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SafeBag,
        _extension_additions_list_spec_for_SafeBag,
        _root_component_type_list_2_spec_for_SafeBag,
        undefined
    );
    return new SafeBag /* SEQUENCE_CONSTRUCTOR_CALL */(
        bagId,
        bagValue,
        bagAttributes
    );
};
export const _encode_SafeBag = function (
    value: SafeBag,
    elGetter: __utils.ASN1Encoder<SafeBag>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.bagId,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.bagValue, __utils.BER),
                /* IF_ABSENT  */ value.bagAttributes === undefined
                    ? undefined
                    : __utils._encodeSetOf<PKCS12Attribute>(
                          () => _encode_PKCS12Attribute,
                          __utils.BER
                      )(value.bagAttributes, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type SafeContents = SafeBag[]; // SequenceOfType
export const _decode_SafeContents = __utils._decodeSequenceOf<SafeBag>(
    () => _decode_SafeBag
);
export const _encode_SafeContents = __utils._encodeSequenceOf<SafeBag>(
    () => _encode_SafeBag,
    __utils.BER
);

// TODO: ObjectClassAssignment: BAG-TYPE

// TODO: ObjectAssignment: keyBag

// TODO: ObjectAssignment: pkcs8ShroudedKeyBag

// TODO: ObjectAssignment: certBag

// TODO: ObjectAssignment: crlBag

// TODO: ObjectAssignment: secretBag

// TODO: ObjectAssignment: safeContentsBag

// TODO: ObjectSetAssignment: PKCS12BagSet

export type KeyBag = PrivateKeyInfo; // DefinedType
export const _decode_KeyBag = _decode_PrivateKeyInfo;
export const _encode_KeyBag = _encode_PrivateKeyInfo;

export type PKCS8ShroudedKeyBag = EncryptedPrivateKeyInfo; // DefinedType
export const _decode_PKCS8ShroudedKeyBag = _decode_EncryptedPrivateKeyInfo;
export const _encode_PKCS8ShroudedKeyBag = _encode_EncryptedPrivateKeyInfo;

export class CertBag {
    constructor(
        readonly certId: asn1.OBJECT_IDENTIFIER,
        readonly certValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_CertBag: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertBag: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertBag: __utils.ComponentSpec[] = [];

export const _decode_CertBag = function (el: asn1.ASN1Element): CertBag {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "CertBag contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "certId";
    sequence[1].name = "certValue";
    let certId!: asn1.OBJECT_IDENTIFIER;
    let certValue!: asn1.ASN1Element;
    certId = __utils._decodeObjectIdentifier(sequence[0]);
    certValue = __utils._decode_explicit<asn1.ASN1Element>(
        () => __utils._decodeAny
    )(sequence[1]);
    // TODO: Validate values.
    return new CertBag(certId, certValue);
};
export const _encode_CertBag = function (
    value: CertBag,
    elGetter: __utils.ASN1Encoder<CertBag>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.certId,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.certValue, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: x509Certificate

// TODO: ObjectAssignment: sdsiCertificate

// TODO: ObjectSetAssignment: CertTypes

export class CRLBag {
    constructor(
        readonly crlId: asn1.OBJECT_IDENTIFIER,
        readonly crltValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_CRLBag: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "crlId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crltValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CRLBag: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CRLBag: __utils.ComponentSpec[] = [];

export const _decode_CRLBag = function (el: asn1.ASN1Element): CRLBag {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "CRLBag contained only " + sequence.length.toString() + " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "crlId";
    sequence[1].name = "crltValue";
    let crlId!: asn1.OBJECT_IDENTIFIER;
    let crltValue!: asn1.ASN1Element;
    crlId = __utils._decodeObjectIdentifier(sequence[0]);
    crltValue = __utils._decode_explicit<asn1.ASN1Element>(
        () => __utils._decodeAny
    )(sequence[1]);
    // TODO: Validate values.
    return new CRLBag(crlId, crltValue);
};
export const _encode_CRLBag = function (
    value: CRLBag,
    elGetter: __utils.ASN1Encoder<CRLBag>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.crlId,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.crltValue, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: x509CRL

// TODO: ObjectSetAssignment: CRLTypes

export class SecretBag {
    constructor(
        readonly secretTypeId: asn1.OBJECT_IDENTIFIER,
        readonly secretValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SecretBag: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "secretTypeId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "secretValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecretBag: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecretBag: __utils.ComponentSpec[] = [];

export const _decode_SecretBag = function (el: asn1.ASN1Element): SecretBag {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "SecretBag contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "secretTypeId";
    sequence[1].name = "secretValue";
    let secretTypeId!: asn1.OBJECT_IDENTIFIER;
    let secretValue!: asn1.ASN1Element;
    secretTypeId = __utils._decodeObjectIdentifier(sequence[0]);
    secretValue = __utils._decode_explicit<asn1.ASN1Element>(
        () => __utils._decodeAny
    )(sequence[1]);
    // TODO: Validate values.
    return new SecretBag(secretTypeId, secretValue);
};
export const _encode_SecretBag = function (
    value: SecretBag,
    elGetter: __utils.ASN1Encoder<SecretBag>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.secretTypeId,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.secretValue, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectSetAssignment: SecretTypes

// TODO: ObjectSetAssignment: PKCS12AttrSet

/* END_MODULE PKCS-12 */

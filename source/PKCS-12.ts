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
    pkcs_9,
} from "./PKCS-9";

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
let _cached_decoder_for_PFX_version: __utils.ASN1Decoder<
    PFX_version
> | null = null;
let _cached_encoder_for_PFX_version: __utils.ASN1Encoder<
    PFX_version
> | null = null;
export function _decode_PFX_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PFX_version) {
        _cached_decoder_for_PFX_version = __utils._decodeInteger;
    }
    return _cached_decoder_for_PFX_version(el);
}
export function _encode_PFX_version(
    value: PFX_version,
    elGetter: __utils.ASN1Encoder<PFX_version>
) {
    if (!_cached_encoder_for_PFX_version) {
        _cached_encoder_for_PFX_version = __utils._encodeInteger;
    }
    return _cached_encoder_for_PFX_version(value, elGetter);
}

export class MacData {
    constructor(
        readonly mac: DigestInfo,
        readonly macSalt: asn1.OCTET_STRING,
        readonly iterations: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
    public static get _default_value_for_iterations() {
        return 1;
    }
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
let _cached_decoder_for_MacData: __utils.ASN1Decoder<MacData> | null = null;
let _cached_encoder_for_MacData: __utils.ASN1Encoder<MacData> | null = null;
export function _decode_MacData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MacData) {
        _cached_decoder_for_MacData = function (el: asn1.ASN1Element): MacData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mac!: DigestInfo;
            let macSalt!: asn1.OCTET_STRING;
            let iterations: asn1.OPTIONAL<asn1.INTEGER> =
                MacData._default_value_for_iterations;
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
    }
    return _cached_decoder_for_MacData(el);
}
export function _encode_MacData(
    value: MacData,
    elGetter: __utils.ASN1Encoder<MacData>
) {
    if (!_cached_encoder_for_MacData) {
        _cached_encoder_for_MacData = function (
            value: MacData,
            elGetter: __utils.ASN1Encoder<MacData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DigestInfo(
                            value.mac,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.macSalt,
                            __utils.BER
                        ),
                        /* IF_DEFAULT */ value.iterations === undefined ||
                        __utils.deepEq(
                            value.iterations,
                            MacData._default_value_for_iterations
                        )
                            ? undefined
                            : __utils._encodeInteger(
                                  value.iterations,
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
    return _cached_encoder_for_MacData(value, elGetter);
}

export class PFX {
    constructor(
        readonly version: PFX_version,
        readonly authSafe: ContentInfo,
        readonly macData: asn1.OPTIONAL<MacData>
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
let _cached_decoder_for_PFX: __utils.ASN1Decoder<PFX> | null = null;
let _cached_encoder_for_PFX: __utils.ASN1Encoder<PFX> | null = null;
export function _decode_PFX(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PFX) {
        _cached_decoder_for_PFX = function (el: asn1.ASN1Element): PFX {
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
            return new PFX /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                authSafe,
                macData
            );
        };
    }
    return _cached_decoder_for_PFX(el);
}
export function _encode_PFX(value: PFX, elGetter: __utils.ASN1Encoder<PFX>) {
    if (!_cached_encoder_for_PFX) {
        _cached_encoder_for_PFX = function (
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
    }
    return _cached_encoder_for_PFX(value, elGetter);
}

export type AuthenticatedSafe = ContentInfo[]; // SequenceOfType
let _cached_decoder_for_AuthenticatedSafe: __utils.ASN1Decoder<
    AuthenticatedSafe
> | null = null;
let _cached_encoder_for_AuthenticatedSafe: __utils.ASN1Encoder<
    AuthenticatedSafe
> | null = null;
export function _decode_AuthenticatedSafe(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthenticatedSafe) {
        _cached_decoder_for_AuthenticatedSafe = __utils._decodeSequenceOf<
            ContentInfo
        >(() => _decode_ContentInfo);
    }
    return _cached_decoder_for_AuthenticatedSafe(el);
}
export function _encode_AuthenticatedSafe(
    value: AuthenticatedSafe,
    elGetter: __utils.ASN1Encoder<AuthenticatedSafe>
) {
    if (!_cached_encoder_for_AuthenticatedSafe) {
        _cached_encoder_for_AuthenticatedSafe = __utils._encodeSequenceOf<
            ContentInfo
        >(() => _encode_ContentInfo, __utils.BER);
    }
    return _cached_encoder_for_AuthenticatedSafe(value, elGetter);
}

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
let _cached_decoder_for_PKCS12Attribute: __utils.ASN1Decoder<
    PKCS12Attribute
> | null = null;
let _cached_encoder_for_PKCS12Attribute: __utils.ASN1Encoder<
    PKCS12Attribute
> | null = null;
export function _decode_PKCS12Attribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKCS12Attribute) {
        _cached_decoder_for_PKCS12Attribute = function (
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
    }
    return _cached_decoder_for_PKCS12Attribute(el);
}
export function _encode_PKCS12Attribute(
    value: PKCS12Attribute,
    elGetter: __utils.ASN1Encoder<PKCS12Attribute>
) {
    if (!_cached_encoder_for_PKCS12Attribute) {
        _cached_encoder_for_PKCS12Attribute = function (
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
    }
    return _cached_encoder_for_PKCS12Attribute(value, elGetter);
}

export class SafeBag {
    constructor(
        readonly bagId: asn1.OBJECT_IDENTIFIER,
        readonly bagValue: asn1.ASN1Element,
        readonly bagAttributes: asn1.OPTIONAL<PKCS12Attribute[]>
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
let _cached_decoder_for_SafeBag: __utils.ASN1Decoder<SafeBag> | null = null;
let _cached_encoder_for_SafeBag: __utils.ASN1Encoder<SafeBag> | null = null;
export function _decode_SafeBag(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SafeBag) {
        _cached_decoder_for_SafeBag = function (el: asn1.ASN1Element): SafeBag {
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
    }
    return _cached_decoder_for_SafeBag(el);
}
export function _encode_SafeBag(
    value: SafeBag,
    elGetter: __utils.ASN1Encoder<SafeBag>
) {
    if (!_cached_encoder_for_SafeBag) {
        _cached_encoder_for_SafeBag = function (
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
    }
    return _cached_encoder_for_SafeBag(value, elGetter);
}

export type SafeContents = SafeBag[]; // SequenceOfType
let _cached_decoder_for_SafeContents: __utils.ASN1Decoder<
    SafeContents
> | null = null;
let _cached_encoder_for_SafeContents: __utils.ASN1Encoder<
    SafeContents
> | null = null;
export function _decode_SafeContents(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SafeContents) {
        _cached_decoder_for_SafeContents = __utils._decodeSequenceOf<SafeBag>(
            () => _decode_SafeBag
        );
    }
    return _cached_decoder_for_SafeContents(el);
}
export function _encode_SafeContents(
    value: SafeContents,
    elGetter: __utils.ASN1Encoder<SafeContents>
) {
    if (!_cached_encoder_for_SafeContents) {
        _cached_encoder_for_SafeContents = __utils._encodeSequenceOf<SafeBag>(
            () => _encode_SafeBag,
            __utils.BER
        );
    }
    return _cached_encoder_for_SafeContents(value, elGetter);
}

// TODO: ObjectClassAssignment: BAG-TYPE

// TODO: ObjectAssignment: keyBag

// TODO: ObjectAssignment: pkcs8ShroudedKeyBag

// TODO: ObjectAssignment: certBag

// TODO: ObjectAssignment: crlBag

// TODO: ObjectAssignment: secretBag

// TODO: ObjectAssignment: safeContentsBag

// TODO: ObjectSetAssignment: PKCS12BagSet

export type KeyBag = PrivateKeyInfo; // DefinedType
let _cached_decoder_for_KeyBag: __utils.ASN1Decoder<KeyBag> | null = null;
let _cached_encoder_for_KeyBag: __utils.ASN1Encoder<KeyBag> | null = null;
export function _decode_KeyBag(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyBag) {
        _cached_decoder_for_KeyBag = _decode_PrivateKeyInfo;
    }
    return _cached_decoder_for_KeyBag(el);
}
export function _encode_KeyBag(
    value: KeyBag,
    elGetter: __utils.ASN1Encoder<KeyBag>
) {
    if (!_cached_encoder_for_KeyBag) {
        _cached_encoder_for_KeyBag = _encode_PrivateKeyInfo;
    }
    return _cached_encoder_for_KeyBag(value, elGetter);
}

export type PKCS8ShroudedKeyBag = EncryptedPrivateKeyInfo; // DefinedType
let _cached_decoder_for_PKCS8ShroudedKeyBag: __utils.ASN1Decoder<
    PKCS8ShroudedKeyBag
> | null = null;
let _cached_encoder_for_PKCS8ShroudedKeyBag: __utils.ASN1Encoder<
    PKCS8ShroudedKeyBag
> | null = null;
export function _decode_PKCS8ShroudedKeyBag(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKCS8ShroudedKeyBag) {
        _cached_decoder_for_PKCS8ShroudedKeyBag = _decode_EncryptedPrivateKeyInfo;
    }
    return _cached_decoder_for_PKCS8ShroudedKeyBag(el);
}
export function _encode_PKCS8ShroudedKeyBag(
    value: PKCS8ShroudedKeyBag,
    elGetter: __utils.ASN1Encoder<PKCS8ShroudedKeyBag>
) {
    if (!_cached_encoder_for_PKCS8ShroudedKeyBag) {
        _cached_encoder_for_PKCS8ShroudedKeyBag = _encode_EncryptedPrivateKeyInfo;
    }
    return _cached_encoder_for_PKCS8ShroudedKeyBag(value, elGetter);
}

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
let _cached_decoder_for_CertBag: __utils.ASN1Decoder<CertBag> | null = null;
let _cached_encoder_for_CertBag: __utils.ASN1Encoder<CertBag> | null = null;
export function _decode_CertBag(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertBag) {
        _cached_decoder_for_CertBag = function (el: asn1.ASN1Element): CertBag {
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
    }
    return _cached_decoder_for_CertBag(el);
}
export function _encode_CertBag(
    value: CertBag,
    elGetter: __utils.ASN1Encoder<CertBag>
) {
    if (!_cached_encoder_for_CertBag) {
        _cached_encoder_for_CertBag = function (
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
    }
    return _cached_encoder_for_CertBag(value, elGetter);
}

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
let _cached_decoder_for_CRLBag: __utils.ASN1Decoder<CRLBag> | null = null;
let _cached_encoder_for_CRLBag: __utils.ASN1Encoder<CRLBag> | null = null;
export function _decode_CRLBag(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLBag) {
        _cached_decoder_for_CRLBag = function (el: asn1.ASN1Element): CRLBag {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CRLBag contained only " +
                        sequence.length.toString() +
                        " elements."
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
    }
    return _cached_decoder_for_CRLBag(el);
}
export function _encode_CRLBag(
    value: CRLBag,
    elGetter: __utils.ASN1Encoder<CRLBag>
) {
    if (!_cached_encoder_for_CRLBag) {
        _cached_encoder_for_CRLBag = function (
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
    }
    return _cached_encoder_for_CRLBag(value, elGetter);
}

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
let _cached_decoder_for_SecretBag: __utils.ASN1Decoder<SecretBag> | null = null;
let _cached_encoder_for_SecretBag: __utils.ASN1Encoder<SecretBag> | null = null;
export function _decode_SecretBag(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecretBag) {
        _cached_decoder_for_SecretBag = function (
            el: asn1.ASN1Element
        ): SecretBag {
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
    }
    return _cached_decoder_for_SecretBag(el);
}
export function _encode_SecretBag(
    value: SecretBag,
    elGetter: __utils.ASN1Encoder<SecretBag>
) {
    if (!_cached_encoder_for_SecretBag) {
        _cached_encoder_for_SecretBag = function (
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
    }
    return _cached_encoder_for_SecretBag(value, elGetter);
}

// TODO: ObjectSetAssignment: SecretTypes

// TODO: ObjectSetAssignment: PKCS12AttrSet

/* END_MODULE PKCS-12 */

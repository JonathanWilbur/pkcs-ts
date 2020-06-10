
/*
    BEGIN_MODULE PKIX-CommonTypes-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkixCommon-02
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


// TODO: ObjectClassAssignment: MATCHING-RULE

// TODO: ObjectClassAssignment: ATTRIBUTE

export class AttributeSet {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly values: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeSet: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("values", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeSet: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeSet: __utils.ComponentSpec[] = [
    
];

export const _decode_AttributeSet = function (el: asn1.ASN1Element): AttributeSet {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AttributeSet contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "values";
    let type_!: asn1.OBJECT_IDENTIFIER;
    let values!: asn1.ASN1Element[];
    type_ = __utils._decodeObjectIdentifier(sequence[0]);
    values = __utils._decodeSetOf<asn1.ASN1Element>(() => __utils._decodeAny)(sequence[1]);
    // TODO: Validate values.
    return new AttributeSet(
        type_,
        values,

    );
};
export const _encode_AttributeSet = function (value: AttributeSet, elGetter: __utils.ASN1Encoder<AttributeSet>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER)(value.values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SingleAttribute {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SingleAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SingleAttribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SingleAttribute: __utils.ComponentSpec[] = [
    
];

export const _decode_SingleAttribute = function (el: asn1.ASN1Element): SingleAttribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SingleAttribute contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: asn1.OBJECT_IDENTIFIER;
    let value!: asn1.ASN1Element;
    type_ = __utils._decodeObjectIdentifier(sequence[0]);
    value = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new SingleAttribute(
        type_,
        value,

    );
};
export const _encode_SingleAttribute = function (value: SingleAttribute, elGetter: __utils.ASN1Encoder<SingleAttribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectClassAssignment: EXTENSION

export class Extension {
    constructor (
        readonly extnID: asn1.OBJECT_IDENTIFIER,
        readonly critical: asn1.BOOLEAN | undefined,
        readonly extnValue: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_Extension: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("extnID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("critical", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("extnValue", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Extension: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Extension: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_Extension__critical = false;
export const _decode_Extension = function (el: asn1.ASN1Element): Extension {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let extnID!: asn1.OBJECT_IDENTIFIER;
    let critical: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_Extension__critical;
    let extnValue!: asn1.OCTET_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "extnID": (_el: asn1.ASN1Element): void => { extnID = __utils._decodeObjectIdentifier(_el); },
        "critical": (_el: asn1.ASN1Element): void => { critical = __utils._decodeBoolean(_el); },
        "extnValue": (_el: asn1.ASN1Element): void => { extnValue = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Extension,
        _extension_additions_list_spec_for_Extension,
        _root_component_type_list_2_spec_for_Extension,
        undefined,
    );
    return new Extension( /* SEQUENCE_CONSTRUCTOR_CALL */
        extnID,
        critical,
        extnValue
    );
};
export const _encode_Extension = function (value: Extension, elGetter: __utils.ASN1Encoder<Extension>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.extnID, __utils.BER),
            /* IF_DEFAULT */ (value.critical === undefined || __utils.deepEq(value.critical, _default_value_for_Extension__critical) ? undefined : __utils._encodeBoolean(value.critical, __utils.BER)),
            /* REQUIRED   */ __utils._encodeOctetString(value.extnValue, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Extensions = Extension[]; // SequenceOfType
export const _decode_Extensions = __utils._decodeSequenceOf<Extension>(() => _decode_Extension);
export const _encode_Extensions = __utils._encodeSequenceOf<Extension>(() => _encode_Extension, __utils.BER);


// TODO: ObjectClassAssignment: SECURITY-CATEGORY

export class SecurityCategory {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    
];

export const _decode_SecurityCategory = function (el: asn1.ASN1Element): SecurityCategory {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SecurityCategory contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: asn1.OBJECT_IDENTIFIER;
    let value!: asn1.ASN1Element;
    type_ = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(sequence[0]);
    value = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(sequence[1]);
    // TODO: Validate values.
    return new SecurityCategory(
        type_,
        value,

    );
};
export const _encode_SecurityCategory = function (value: SecurityCategory, elGetter: __utils.ASN1Encoder<SecurityCategory>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeAny, __utils.BER)(value.value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


/* END_MODULE PKIX-CommonTypes-2009 */

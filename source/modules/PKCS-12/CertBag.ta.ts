/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { CertTypes } from "../PKCS-12/CertTypes.osa";

/* START_OF_SYMBOL_DEFINITION CertBag */
/**
 * @summary CertBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBag ::= SEQUENCE {
 *     certId    BAG-TYPE.&id   ({CertTypes}),
 *     certValue [0] EXPLICIT BAG-TYPE.&Type ({CertTypes}{@certId})
 * }
 * ```
 *
 * @class
 */
export class CertBag {
    constructor(
        /**
         * @summary `certId`.
         * @public
         * @readonly
         */
        readonly certId: OBJECT_IDENTIFIER,
        /**
         * @summary `certValue`.
         * @public
         * @readonly
         */
        readonly certValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a CertBag
     * @description
     *
     * This takes an `object` and converts it to a `CertBag`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertBag`.
     * @returns {CertBag}
     */
    public static _from_object(
        _o: { [_K in keyof CertBag]: CertBag[_K] }
    ): CertBag {
        return new CertBag(_o.certId, _o.certValue);
    }
}
/* END_OF_SYMBOL_DEFINITION CertBag */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertBag */
/**
 * @summary The Leading Root Component Types of CertBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertBag: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certValue",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertBag */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertBag */
/**
 * @summary The Trailing Root Component Types of CertBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertBag: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertBag */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertBag */
/**
 * @summary The Extension Addition Component Types of CertBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertBag: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertBag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBag */
let _cached_decoder_for_CertBag: $.ASN1Decoder<CertBag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBag */

/* START_OF_SYMBOL_DEFINITION _decode_CertBag */
/**
 * @summary Decodes an ASN.1 element into a(n) CertBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBag} The decoded data structure.
 */
export function _decode_CertBag(el: _Element) {
    if (!_cached_decoder_for_CertBag) {
        _cached_decoder_for_CertBag = function (el: _Element): CertBag {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertBag contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "certId";
            sequence[1].name = "certValue";
            let certId!: OBJECT_IDENTIFIER;
            let certValue!: _Element;
            certId = $._decodeObjectIdentifier(sequence[0]);
            certValue = $._decode_explicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new CertBag(certId, certValue);
        };
    }
    return _cached_decoder_for_CertBag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertBag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBag */
let _cached_encoder_for_CertBag: $.ASN1Encoder<CertBag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBag */

/* START_OF_SYMBOL_DEFINITION _encode_CertBag */
/**
 * @summary Encodes a(n) CertBag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBag, encoded as an ASN.1 Element.
 */
export function _encode_CertBag(
    value: CertBag,
    elGetter: $.ASN1Encoder<CertBag>
) {
    if (!_cached_encoder_for_CertBag) {
        _cached_encoder_for_CertBag = function (
            value: CertBag,
            elGetter: $.ASN1Encoder<CertBag>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.certId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.certValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertBag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertBag */

/* eslint-enable */

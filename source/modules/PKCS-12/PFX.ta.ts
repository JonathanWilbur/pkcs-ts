/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MacData,
    _decode_MacData,
    _encode_MacData,
} from "../PKCS-12/MacData.ta";
import {
    PFX_version,
    _decode_PFX_version,
    _encode_PFX_version,
} from "../PKCS-12/PFX-version.ta";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta";

/* START_OF_SYMBOL_DEFINITION PFX */
/**
 * @summary PFX
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PFX ::= SEQUENCE {
 *     version    INTEGER {v3(3)}(v3,...),
 *     authSafe   ContentInfo,
 *     macData    MacData OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PFX {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: PFX_version,
        /**
         * @summary `authSafe`.
         * @public
         * @readonly
         */
        readonly authSafe: ContentInfo,
        /**
         * @summary `macData`.
         * @public
         * @readonly
         */
        readonly macData: OPTIONAL<MacData>
    ) {}

    /**
     * @summary Restructures an object into a PFX
     * @description
     *
     * This takes an `object` and converts it to a `PFX`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFX`.
     * @returns {PFX}
     */
    public static _from_object(_o: { [_K in keyof PFX]: PFX[_K] }): PFX {
        return new PFX(_o.version, _o.authSafe, _o.macData);
    }
}
/* END_OF_SYMBOL_DEFINITION PFX */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PFX */
/**
 * @summary The Leading Root Component Types of PFX
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PFX: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authSafe",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "macData",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PFX */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PFX */
/**
 * @summary The Trailing Root Component Types of PFX
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PFX: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PFX */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PFX */
/**
 * @summary The Extension Addition Component Types of PFX
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PFX: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PFX */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PFX */
let _cached_decoder_for_PFX: $.ASN1Decoder<PFX> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PFX */

/* START_OF_SYMBOL_DEFINITION _decode_PFX */
/**
 * @summary Decodes an ASN.1 element into a(n) PFX
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PFX} The decoded data structure.
 */
export function _decode_PFX(el: _Element) {
    if (!_cached_decoder_for_PFX) {
        _cached_decoder_for_PFX = function (el: _Element): PFX {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: PFX_version;
            let authSafe!: ContentInfo;
            let macData: OPTIONAL<MacData>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_PFX_version(_el);
                },
                authSafe: (_el: _Element): void => {
                    authSafe = _decode_ContentInfo(_el);
                },
                macData: (_el: _Element): void => {
                    macData = _decode_MacData(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PFX,
                _extension_additions_list_spec_for_PFX,
                _root_component_type_list_2_spec_for_PFX,
                undefined
            );
            return new PFX(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                authSafe,
                macData
            );
        };
    }
    return _cached_decoder_for_PFX(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PFX */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PFX */
let _cached_encoder_for_PFX: $.ASN1Encoder<PFX> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PFX */

/* START_OF_SYMBOL_DEFINITION _encode_PFX */
/**
 * @summary Encodes a(n) PFX into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFX, encoded as an ASN.1 Element.
 */
export function _encode_PFX(value: PFX, elGetter: $.ASN1Encoder<PFX>) {
    if (!_cached_encoder_for_PFX) {
        _cached_encoder_for_PFX = function (
            value: PFX,
            elGetter: $.ASN1Encoder<PFX>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PFX_version(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.authSafe,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.macData === undefined
                            ? undefined
                            : _encode_MacData(value.macData, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PFX(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PFX */

/* eslint-enable */

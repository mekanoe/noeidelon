
import { Mesh } from "../renderer/mesh";

// prettier-ignore
const mesh = new Float32Array([1.2393061,0.16315772,0,1,0,0,0,255,0.5208333,0.5,1.2165064,0,0.125,1,0,0,0,255,0.5,0.5833333,1.25,0,0,1,0,0,0,255,0.5,0.5,1.1153755,0.14684194,0.21650635,1,0,0,0,255,0.5208333,0.6666667,1.125,0,0.21650635,1,0,0,0,255,0.5,0.6666667,1,0,0.25,1,0,0,0,255,0.5,0.75,0.9914449,0.13052617,0.25,1,0,0,0,255,0.5208333,0.75,0.875,0,0.21650635,1,0,0,0,255,0.5,0.8333333,0.86751425,0.1142104,0.21650635,1,0,0,0,255,0.5208333,0.8333333,0.78349364,0,0.125,1,0,0,0,255,0.5,0.9166667,0.7435837,0.097894624,3.061617e-17,1,0,0,0,255,0.5208333,1,0.75,0,3.061617e-17,1,0,0,0,255,0.5,1,0.7435837,0.097894624,3.061617e-17,1,0,0,0,255,0.5208333,2.220446e-16,0.78349364,0,-0.125,1,0,0,0,255,0.5,0.083333336,0.75,0,3.061617e-17,1,0,0,0,255,0.5,2.220446e-16,0.77679074,0.10226642,-0.125,1,0,0,0,255,0.5208333,0.083333336,0.875,0,-0.21650635,1,0,0,0,255,0.5,0.16666667,0.86751425,0.1142104,-0.21650635,1,0,0,0,255,0.5208333,0.16666667,1,0,-0.25,1,0,0,0,255,0.5,0.25,0.9914449,0.13052617,-0.25,1,0,0,0,255,0.5208333,0.25,1.125,0,-0.21650635,1,0,0,0,255,0.5,0.33333334,1.1153755,0.14684194,-0.21650635,1,0,0,0,255,0.5208333,0.33333334,1.2165064,0,-0.125,1,0,0,0,255,0.5,0.41666666,1.206099,0.15878591,-0.125,1,0,0,0,255,0.5208333,0.41666666,1.2074072,0.32352373,0,1,0,0,0,255,0.5416667,0.5,1.206099,0.15878591,0.125,1,0,0,0,255,0.5208333,0.5833333,1.1750549,0.31485495,0.125,1,0,0,0,255,0.5416667,0.5833333,1.0866666,0.29117137,0.21650635,1,0,0,0,255,0.5416667,0.6666667,0.9659258,0.25881898,0.25,1,0,0,0,255,0.5416667,0.75,0.7567967,0.20278303,0.125,1,0,0,0,255,0.5416667,0.9166667,0.77679074,0.10226642,0.125,1,0,0,0,255,0.5208333,0.9166667,0.7244444,0.19411424,3.061617e-17,1,0,0,0,255,0.5416667,2.220446e-16,0.7567967,0.20278303,-0.125,1,0,0,0,255,0.5416667,0.083333336,0.9659258,0.25881898,-0.25,1,0,0,0,255,0.5416667,0.25,1.0866666,0.29117137,-0.21650635,1,0,0,0,255,0.5416667,0.33333334,1.1750549,0.31485495,-0.125,1,0,0,0,255,0.5416667,0.41666666,1.1239054,0.46553674,0.125,1,0,0,0,255,0.5625,0.5833333,1.0393645,0.43051878,0.21650635,1,0,0,0,255,0.5625,0.6666667,0.8083946,0.33484796,0.21650635,1,0,0,0,255,0.5625,0.8333333,0.8451851,0.22646661,0.21650635,1,0,0,0,255,0.5416667,0.8333333,0.72385377,0.29983,0.125,1,0,0,0,255,0.5625,0.9166667,0.69290966,0.28701252,3.061617e-17,1,0,0,0,255,0.5625,1,0.7244444,0.19411424,3.061617e-17,1,0,0,0,255,0.5416667,1,0.69290966,0.28701252,3.061617e-17,1,0,0,0,255,0.5625,2.220446e-16,0.72385377,0.29983,-0.125,1,0,0,0,255,0.5625,0.083333336,0.8451851,0.22646661,-0.21650635,1,0,0,0,255,0.5416667,0.16666667,0.92387956,0.38268337,-0.25,1,0,0,0,255,0.5625,0.25,1.0393645,0.43051878,-0.21650635,1,0,0,0,255,0.5625,0.33333334,1.1239054,0.46553674,-0.125,1,0,0,0,255,0.5625,0.41666666,1.1548494,0.47835422,0,1,0,0,0,255,0.5625,0.5,1.0535253,0.6082533,0.125,1,0,0,0,255,0.5833333,0.5833333,0.9742785,0.5625001,0.21650635,1,0,0,0,255,0.5833333,0.6666667,0.8660253,0.5000001,0.25,1,0,0,0,255,0.5833333,0.75,0.92387956,0.38268337,0.25,1,0,0,0,255,0.5625,0.75,0.6785253,0.3917469,0.125,1,0,0,0,255,0.5833333,0.9166667,0.64951897,0.3750001,3.061617e-17,1,0,0,0,255,0.5833333,2.220446e-16,0.6785253,0.3917469,-0.125,1,0,0,0,255,0.5833333,0.083333336,0.8083946,0.33484796,-0.21650635,1,0,0,0,255,0.5625,0.16666667,0.8660253,0.5000001,-0.25,1,0,0,0,255,0.5833333,0.25,0.9742785,0.5625001,-0.21650635,1,0,0,0,255,0.5833333,0.33333334,1.0535253,0.6082533,-0.125,1,0,0,0,255,0.5833333,0.41666666,0.9916918,0.76095164,0,1,0,0,0,255,0.6041667,0.5,1.0825317,0.6250001,0,1,0,0,0,255,0.5833333,0.5,0.89252263,0.6848565,0.21650635,1,0,0,0,255,0.6041667,0.6666667,0.79335344,0.6087613,0.25,1,0,0,0,255,0.6041667,0.75,0.75777215,0.43750012,0.21650635,1,0,0,0,255,0.5833333,0.8333333,0.6215874,0.4769606,0.125,1,0,0,0,255,0.6041667,0.9166667,0.64951897,0.3750001,3.061617e-17,1,0,0,0,255,0.5833333,1,0.59501505,0.45657098,3.061617e-17,1,0,0,0,255,0.6041667,2.220446e-16,0.6215874,0.4769606,-0.125,1,0,0,0,255,0.6041667,0.083333336,0.75777215,0.43750012,-0.21650635,1,0,0,0,255,0.5833333,0.16666667,0.69418424,0.53266615,-0.21650635,1,0,0,0,255,0.6041667,0.16666667,0.79335344,0.6087613,-0.25,1,0,0,0,255,0.6041667,0.25,0.89252263,0.6848565,-0.21650635,1,0,0,0,255,0.6041667,0.33333334,0.88388336,0.88388354,0,1,0,0,0,255,0.625,0.5,0.9651195,0.740562,0.125,1,0,0,0,255,0.6041667,0.5833333,0.8601998,0.8601999,0.125,1,0,0,0,255,0.625,0.5833333,0.79549503,0.79549515,0.21650635,1,0,0,0,255,0.625,0.6666667,0.7071067,0.7071068,0.25,1,0,0,0,255,0.625,0.75,0.69418424,0.53266615,0.21650635,1,0,0,0,255,0.6041667,0.8333333,0.6187184,0.6187185,0.21650635,1,0,0,0,255,0.625,0.8333333,0.5540136,0.5540137,0.125,1,0,0,0,255,0.625,0.9166667,0.59501505,0.45657098,3.061617e-17,1,0,0,0,255,0.6041667,1,0.5540136,0.5540137,-0.125,1,0,0,0,255,0.625,0.083333336,0.6187184,0.6187185,-0.21650635,1,0,0,0,255,0.625,0.16666667,0.7071067,0.7071068,-0.25,1,0,0,0,255,0.625,0.25,0.8601998,0.8601999,-0.125,1,0,0,0,255,0.625,0.41666666,0.9651195,0.740562,-0.125,1,0,0,0,255,0.6041667,0.41666666,0.76095194,0.99169147,0,1,0,0,0,255,0.6458333,0.5,0.6848568,0.89252234,0.21650635,1,0,0,0,255,0.6458333,0.6666667,0.60876155,0.7933532,0.25,1,0,0,0,255,0.6458333,0.75,0.4769608,0.62158716,0.125,1,0,0,0,255,0.6458333,0.9166667,0.53033006,0.5303301,3.061617e-17,1,0,0,0,255,0.625,1,0.45657116,0.5950149,3.061617e-17,1,0,0,0,255,0.6458333,2.220446e-16,0.53033006,0.5303301,3.061617e-17,1,0,0,0,255,0.625,2.220446e-16,0.4769608,0.62158716,-0.125,1,0,0,0,255,0.6458333,0.083333336,0.60876155,0.7933532,-0.25,1,0,0,0,255,0.6458333,0.25,0.6848568,0.89252234,-0.21650635,1,0,0,0,255,0.6458333,0.33333334,0.79549503,0.79549515,-0.21650635,1,0,0,0,255,0.625,0.33333334,0.7405623,0.96511924,-0.125,1,0,0,0,255,0.6458333,0.41666666,0.62499994,1.0825318,0,1,0,0,0,255,0.6666667,0.5,0.7405623,0.96511924,0.125,1,0,0,0,255,0.6458333,0.5833333,0.56249994,0.9742786,0.21650635,1,0,0,0,255,0.6666667,0.6666667,0.49999997,0.86602545,0.25,1,0,0,0,255,0.6666667,0.75,0.5326663,0.69418406,0.21650635,1,0,0,0,255,0.6458333,0.8333333,0.3917468,0.67852545,0.125,1,0,0,0,255,0.6666667,0.9166667,0.45657116,0.5950149,3.061617e-17,1,0,0,0,255,0.6458333,1,0.37499997,0.6495191,3.061617e-17,1,0,0,0,255,0.6666667,2.220446e-16,0.3917468,0.67852545,-0.125,1,0,0,0,255,0.6666667,0.083333336,0.5326663,0.69418406,-0.21650635,1,0,0,0,255,0.6458333,0.16666667,0.43749997,0.75777227,-0.21650635,1,0,0,0,255,0.6666667,0.16666667,0.49999997,0.86602545,-0.25,1,0,0,0,255,0.6666667,0.25,0.56249994,0.9742786,-0.21650635,1,0,0,0,255,0.6666667,0.33333334,0.6082531,1.0535254,-0.125,1,0,0,0,255,0.6666667,0.41666666,0.4655371,1.1239052,0.125,1,0,0,0,255,0.6875,0.5833333,0.6082531,1.0535254,0.125,1,0,0,0,255,0.6666667,0.5833333,0.43051913,1.0393643,0.21650635,1,0,0,0,255,0.6875,0.6666667,0.38268366,0.92387944,0.25,1,0,0,0,255,0.6875,0.75,0.43749997,0.75777227,0.21650635,1,0,0,0,255,0.6666667,0.8333333,0.3348482,0.8083945,0.21650635,1,0,0,0,255,0.6875,0.8333333,0.29983023,0.72385365,0.125,1,0,0,0,255,0.6875,0.9166667,0.37499997,0.6495191,3.061617e-17,1,0,0,0,255,0.6666667,1,0.28701276,0.6929096,3.061617e-17,1,0,0,0,255,0.6875,2.220446e-16,0.29983023,0.72385365,-0.125,1,0,0,0,255,0.6875,0.083333336,0.38268366,0.92387944,-0.25,1,0,0,0,255,0.6875,0.25,0.43051913,1.0393643,-0.21650635,1,0,0,0,255,0.6875,0.33333334,0.4655371,1.1239052,-0.125,1,0,0,0,255,0.6875,0.41666666,0.32352385,1.2074072,0,1,0,0,0,255,0.7083333,0.5,0.47835457,1.1548493,0,1,0,0,0,255,0.6875,0.5,0.31485504,1.1750549,0.125,1,0,0,0,255,0.7083333,0.5833333,0.29117146,1.0866666,0.21650635,1,0,0,0,255,0.7083333,0.6666667,0.25881907,0.9659258,0.25,1,0,0,0,255,0.7083333,0.75,0.2027831,0.7567967,0.125,1,0,0,0,255,0.7083333,0.9166667,0.28701276,0.6929096,3.061617e-17,1,0,0,0,255,0.6875,1,0.1941143,0.7244444,3.061617e-17,1,0,0,0,255,0.7083333,2.220446e-16,0.2027831,0.7567967,-0.125,1,0,0,0,255,0.7083333,0.083333336,0.3348482,0.8083945,-0.21650635,1,0,0,0,255,0.6875,0.16666667,0.22646669,0.8451851,-0.21650635,1,0,0,0,255,0.7083333,0.16666667,0.25881907,0.9659258,-0.25,1,0,0,0,255,0.7083333,0.25,0.29117146,1.0866666,-0.21650635,1,0,0,0,255,0.7083333,0.33333334,0.31485504,1.1750549,-0.125,1,0,0,0,255,0.7083333,0.41666666,0.16315751,1.2393061,0,1,0,0,0,255,0.7291667,0.5,0.15878572,1.206099,0.125,1,0,0,0,255,0.7291667,0.5833333,0.130526,0.9914449,0.25,1,0,0,0,255,0.7291667,0.75,0.22646669,0.8451851,0.21650635,1,0,0,0,255,0.7083333,0.8333333,0.114210255,0.86751425,0.21650635,1,0,0,0,255,0.7291667,0.8333333,0.1022663,0.77679074,0.125,1,0,0,0,255,0.7291667,0.9166667,0.1941143,0.7244444,3.061617e-17,1,0,0,0,255,0.7083333,1,0.1022663,0.77679074,-0.125,1,0,0,0,255,0.7291667,0.083333336,0.130526,0.9914449,-0.25,1,0,0,0,255,0.7291667,0.25,0.14684176,1.1153755,-0.21650635,1,0,0,0,255,0.7291667,0.33333334,0.15878572,1.206099,-0.125,1,0,0,0,255,0.7291667,0.41666666,9.4372375e-8,1.25,0,1,0,0,0,255,0.75,0.5,9.1843674e-8,1.2165064,0.125,1,0,0,0,255,0.75,0.5833333,0.14684176,1.1153755,0.21650635,1,0,0,0,255,0.7291667,0.6666667,8.493514e-8,1.125,0.21650635,1,0,0,0,255,0.75,0.6666667,6.6060664e-8,0.875,0.21650635,1,0,0,0,255,0.75,0.8333333,5.9152125e-8,0.78349364,0.125,1,0,0,0,255,0.75,0.9166667,0.097894505,0.7435837,3.061617e-17,1,0,0,0,255,0.7291667,1,5.6623428e-8,0.75,3.061617e-17,1,0,0,0,255,0.75,2.220446e-16,0.097894505,0.7435837,3.061617e-17,1,0,0,0,255,0.7291667,2.220446e-16,5.9152125e-8,0.78349364,-0.125,1,0,0,0,255,0.75,0.083333336,0.114210255,0.86751425,-0.21650635,1,0,0,0,255,0.7291667,0.16666667,6.6060664e-8,0.875,-0.21650635,1,0,0,0,255,0.75,0.16666667,7.54979e-8,1,-0.25,1,0,0,0,255,0.75,0.25,8.493514e-8,1.125,-0.21650635,1,0,0,0,255,0.75,0.33333334,-0.16315791,1.239306,0,1,0,0,0,255,0.7708333,0.5,-0.15878612,1.2060989,0.125,1,0,0,0,255,0.7708333,0.5833333,-0.14684212,1.1153754,0.21650635,1,0,0,0,255,0.7708333,0.6666667,7.54979e-8,1,0.25,1,0,0,0,255,0.75,0.75,-0.13052633,0.9914448,0.25,1,0,0,0,255,0.7708333,0.75,-0.114210546,0.86751425,0.21650635,1,0,0,0,255,0.7708333,0.8333333,-0.10226655,0.77679074,0.125,1,0,0,0,255,0.7708333,0.9166667,5.6623428e-8,0.75,3.061617e-17,1,0,0,0,255,0.75,1,-0.10226655,0.77679074,-0.125,1,0,0,0,255,0.7708333,0.083333336,-0.13052633,0.9914448,-0.25,1,0,0,0,255,0.7708333,0.25,-0.14684212,1.1153754,-0.21650635,1,0,0,0,255,0.7708333,0.33333334,-0.15878612,1.2060989,-0.125,1,0,0,0,255,0.7708333,0.41666666,9.1843674e-8,1.2165064,-0.125,1,0,0,0,255,0.75,0.41666666,-0.32352364,1.2074074,0,1,0,0,0,255,0.7916667,0.5,-0.29117128,1.0866666,0.21650635,1,0,0,0,255,0.7916667,0.6666667,-0.25881892,0.9659259,0.25,1,0,0,0,255,0.7916667,0.75,-0.22646657,0.84518516,0.21650635,1,0,0,0,255,0.7916667,0.8333333,-0.20278297,0.7567968,0.125,1,0,0,0,255,0.7916667,0.9166667,-0.09789475,0.7435836,3.061617e-17,1,0,0,0,255,0.7708333,1,-0.1941142,0.7244444,3.061617e-17,1,0,0,0,255,0.7916667,2.220446e-16,-0.09789475,0.7435836,3.061617e-17,1,0,0,0,255,0.7708333,2.220446e-16,-0.20278297,0.7567968,-0.125,1,0,0,0,255,0.7916667,0.083333336,-0.114210546,0.86751425,-0.21650635,1,0,0,0,255,0.7708333,0.16666667,-0.22646657,0.84518516,-0.21650635,1,0,0,0,255,0.7916667,0.16666667,-0.25881892,0.9659259,-0.25,1,0,0,0,255,0.7916667,0.25,-0.29117128,1.0866666,-0.21650635,1,0,0,0,255,0.7916667,0.33333334,-0.31485486,1.175055,-0.125,1,0,0,0,255,0.7916667,0.41666666,-0.4783544,1.1548494,0,1,0,0,0,255,0.8125,0.5,-0.31485486,1.175055,0.125,1,0,0,0,255,0.7916667,0.5833333,-0.46553692,1.1239053,0.125,1,0,0,0,255,0.8125,0.5833333,-0.43051895,1.0393645,0.21650635,1,0,0,0,255,0.8125,0.6666667,-0.33484808,0.80839455,0.21650635,1,0,0,0,255,0.8125,0.8333333,-0.2998301,0.7238537,0.125,1,0,0,0,255,0.8125,0.9166667,-0.1941142,0.7244444,3.061617e-17,1,0,0,0,255,0.7916667,1,-0.28701264,0.6929096,3.061617e-17,1,0,0,0,255,0.8125,2.220446e-16,-0.2998301,0.7238537,-0.125,1,0,0,0,255,0.8125,0.083333336,-0.38268352,0.9238795,-0.25,1,0,0,0,255,0.8125,0.25,-0.46553692,1.1239053,-0.125,1,0,0,0,255,0.8125,0.41666666,-0.6249998,1.0825319,0,1,0,0,0,255,0.8333333,0.5,-0.5624998,0.9742787,0.21650635,1,0,0,0,255,0.8333333,0.6666667,-0.38268352,0.9238795,0.25,1,0,0,0,255,0.8125,0.75,-0.49999985,0.8660255,0.25,1,0,0,0,255,0.8333333,0.75,-0.43749988,0.7577723,0.21650635,1,0,0,0,255,0.8333333,0.8333333,-0.3917467,0.67852545,0.125,1,0,0,0,255,0.8333333,0.9166667,-0.28701264,0.6929096,3.061617e-17,1,0,0,0,255,0.8125,1,-0.37499988,0.64951915,3.061617e-17,1,0,0,0,255,0.8333333,2.220446e-16,-0.3917467,0.67852545,-0.125,1,0,0,0,255,0.8333333,0.083333336,-0.33484808,0.80839455,-0.21650635,1,0,0,0,255,0.8125,0.16666667,-0.43749988,0.7577723,-0.21650635,1,0,0,0,255,0.8333333,0.16666667,-0.49999985,0.8660255,-0.25,1,0,0,0,255,0.8333333,0.25,-0.43051895,1.0393645,-0.21650635,1,0,0,0,255,0.8125,0.33333334,-0.5624998,0.9742787,-0.21650635,1,0,0,0,255,0.8333333,0.33333334,-0.608253,1.0535256,-0.125,1,0,0,0,255,0.8333333,0.41666666,-0.76095176,0.99169165,0,1,0,0,0,255,0.8541667,0.5,-0.608253,1.0535256,0.125,1,0,0,0,255,0.8333333,0.5833333,-0.74056214,0.96511936,0.125,1,0,0,0,255,0.8541667,0.5833333,-0.6848566,0.89252245,0.21650635,1,0,0,0,255,0.8541667,0.6666667,-0.6087614,0.7933533,0.25,1,0,0,0,255,0.8541667,0.75,-0.53266627,0.6941842,0.21650635,1,0,0,0,255,0.8541667,0.8333333,-0.45657107,0.595015,3.061617e-17,1,0,0,0,255,0.8541667,1,-0.37499988,0.64951915,3.061617e-17,1,0,0,0,255,0.8333333,1,-0.45657107,0.595015,3.061617e-17,1,0,0,0,255,0.8541667,2.220446e-16,-0.53266627,0.6941842,-0.21650635,1,0,0,0,255,0.8541667,0.16666667,-0.6087614,0.7933533,-0.25,1,0,0,0,255,0.8541667,0.25,-0.6848566,0.89252245,-0.21650635,1,0,0,0,255,0.8541667,0.33333334,-0.74056214,0.96511936,-0.125,1,0,0,0,255,0.8541667,0.41666666,-0.8838837,0.88388324,0,1,0,0,0,255,0.875,0.5,-0.8602001,0.8601997,0.125,1,0,0,0,255,0.875,0.5833333,-0.70710695,0.7071066,0.25,1,0,0,0,255,0.875,0.75,-0.61871856,0.61871827,0.21650635,1,0,0,0,255,0.875,0.8333333,-0.47696072,0.6215873,0.125,1,0,0,0,255,0.8541667,0.9166667,-0.5540138,0.5540135,0.125,1,0,0,0,255,0.875,0.9166667,-0.5303302,0.53032994,3.061617e-17,1,0,0,0,255,0.875,2.220446e-16,-0.47696072,0.6215873,-0.125,1,0,0,0,255,0.8541667,0.083333336,-0.61871856,0.61871827,-0.21650635,1,0,0,0,255,0.875,0.16666667,-0.70710695,0.7071066,-0.25,1,0,0,0,255,0.875,0.25,-0.79549533,0.7954949,-0.21650635,1,0,0,0,255,0.875,0.33333334,-0.8602001,0.8601997,-0.125,1,0,0,0,255,0.875,0.41666666,-0.99169165,0.76095176,0,1,0,0,0,255,0.8958333,0.5,-0.96511936,0.74056214,0.125,1,0,0,0,255,0.8958333,0.5833333,-0.79549533,0.7954949,0.21650635,1,0,0,0,255,0.875,0.6666667,-0.89252245,0.6848566,0.21650635,1,0,0,0,255,0.8958333,0.6666667,-0.6941842,0.53266627,0.21650635,1,0,0,0,255,0.8958333,0.8333333,-0.6215873,0.47696072,0.125,1,0,0,0,255,0.8958333,0.9166667,-0.5303302,0.53032994,3.061617e-17,1,0,0,0,255,0.875,1,-0.595015,0.45657107,3.061617e-17,1,0,0,0,255,0.8958333,2.220446e-16,-0.5540138,0.5540135,-0.125,1,0,0,0,255,0.875,0.083333336,-0.6941842,0.53266627,-0.21650635,1,0,0,0,255,0.8958333,0.16666667,-0.7933533,0.6087614,-0.25,1,0,0,0,255,0.8958333,0.25,-0.96511936,0.74056214,-0.125,1,0,0,0,255,0.8958333,0.41666666,-1.0535252,0.6082535,0.125,1,0,0,0,255,0.9166667,0.5833333,-0.86602527,0.50000024,0.25,1,0,0,0,255,0.9166667,0.75,-0.7933533,0.6087614,0.25,1,0,0,0,255,0.8958333,0.75,-0.7577721,0.4375002,0.21650635,1,0,0,0,255,0.9166667,0.8333333,-0.67852527,0.391747,0.125,1,0,0,0,255,0.9166667,0.9166667,-0.595015,0.45657107,3.061617e-17,1,0,0,0,255,0.8958333,1,-0.64951897,0.37500018,3.061617e-17,1,0,0,0,255,0.9166667,2.220446e-16,-0.6215873,0.47696072,-0.125,1,0,0,0,255,0.8958333,0.083333336,-0.67852527,0.391747,-0.125,1,0,0,0,255,0.9166667,0.083333336,-0.86602527,0.50000024,-0.25,1,0,0,0,255,0.9166667,0.25,-0.89252245,0.6848566,-0.21650635,1,0,0,0,255,0.8958333,0.33333334,-0.97427845,0.56250024,-0.21650635,1,0,0,0,255,0.9166667,0.33333334,-1.0535252,0.6082535,-0.125,1,0,0,0,255,0.9166667,0.41666666,-1.1548494,0.47835436,0,1,0,0,0,255,0.9375,0.5,-1.0825316,0.6250003,0,1,0,0,0,255,0.9166667,0.5,-1.1239053,0.4655369,0.125,1,0,0,0,255,0.9375,0.5833333,-0.97427845,0.56250024,0.21650635,1,0,0,0,255,0.9166667,0.6666667,-1.0393645,0.43051893,0.21650635,1,0,0,0,255,0.9375,0.6666667,-0.80839455,0.33484805,0.21650635,1,0,0,0,255,0.9375,0.8333333,-0.7238537,0.29983008,0.125,1,0,0,0,255,0.9375,0.9166667,-0.64951897,0.37500018,3.061617e-17,1,0,0,0,255,0.9166667,1,-0.7238537,0.29983008,-0.125,1,0,0,0,255,0.9375,0.083333336,-0.7577721,0.4375002,-0.21650635,1,0,0,0,255,0.9166667,0.16666667,-0.80839455,0.33484805,-0.21650635,1,0,0,0,255,0.9375,0.16666667,-0.9238795,0.3826835,-0.25,1,0,0,0,255,0.9375,0.25,-1.1239053,0.4655369,-0.125,1,0,0,0,255,0.9375,0.41666666,-1.175055,0.31485486,0.125,1,0,0,0,255,0.9583333,0.5833333,-1.0866666,0.29117128,0.21650635,1,0,0,0,255,0.9583333,0.6666667,-0.9238795,0.3826835,0.25,1,0,0,0,255,0.9375,0.75,-0.84518516,0.22646657,0.21650635,1,0,0,0,255,0.9583333,0.8333333,-0.7567968,0.20278297,0.125,1,0,0,0,255,0.9583333,0.9166667,-0.6929096,0.2870126,3.061617e-17,1,0,0,0,255,0.9375,1,-0.7244444,0.1941142,3.061617e-17,1,0,0,0,255,0.9583333,2.220446e-16,-0.6929096,0.2870126,3.061617e-17,1,0,0,0,255,0.9375,2.220446e-16,-0.7567968,0.20278297,-0.125,1,0,0,0,255,0.9583333,0.083333336,-0.84518516,0.22646657,-0.21650635,1,0,0,0,255,0.9583333,0.16666667,-1.0866666,0.29117128,-0.21650635,1,0,0,0,255,0.9583333,0.33333334,-1.0393645,0.43051893,-0.21650635,1,0,0,0,255,0.9375,0.33333334,-1.175055,0.31485486,-0.125,1,0,0,0,255,0.9583333,0.41666666,-1.239306,0.1631579,0,1,0,0,0,255,0.9791667,0.5,-1.2074074,0.32352364,0,1,0,0,0,255,0.9583333,0.5,-1.2060989,0.1587861,0.125,1,0,0,0,255,0.9791667,0.5833333,-1.1153754,0.1468421,0.21650635,1,0,0,0,255,0.9791667,0.6666667,-0.9659259,0.25881892,0.25,1,0,0,0,255,0.9583333,0.75,-0.9914448,0.13052632,0.25,1,0,0,0,255,0.9791667,0.75,-0.86751425,0.11421053,0.21650635,1,0,0,0,255,0.9791667,0.8333333,-0.77679074,0.10226654,0.125,1,0,0,0,255,0.9791667,0.9166667,-0.7244444,0.1941142,3.061617e-17,1,0,0,0,255,0.9583333,1,-0.7435836,0.09789474,3.061617e-17,1,0,0,0,255,0.9791667,2.220446e-16,-0.86751425,0.11421053,-0.21650635,1,0,0,0,255,0.9791667,0.16666667,-0.9914448,0.13052632,-0.25,1,0,0,0,255,0.9791667,0.25,-0.9659259,0.25881892,-0.25,1,0,0,0,255,0.9583333,0.25,-1.1153754,0.1468421,-0.21650635,1,0,0,0,255,0.9791667,0.33333334,-1.2060989,0.1587861,-0.125,1,0,0,0,255,0.9791667,0.41666666,-1.2165064,1.0635036e-7,0.125,1,0,0,0,255,1,0.5833333,-1.125,9.8350625e-8,0.21650635,1,0,0,0,255,1,0.6666667,-1,8.742278e-8,0.25,1,0,0,0,255,1,0.75,-0.875,7.649493e-8,0.21650635,1,0,0,0,255,1,0.8333333,-0.78349364,6.849519e-8,0.125,1,0,0,0,255,1,0.9166667,-0.7435836,0.09789474,3.061617e-17,1,0,0,0,255,0.9791667,1,-0.75,6.556708e-8,3.061617e-17,1,0,0,0,255,1,2.220446e-16,-0.77679074,0.10226654,-0.125,1,0,0,0,255,0.9791667,0.083333336,-0.875,7.649493e-8,-0.21650635,1,0,0,0,255,1,0.16666667,-1,8.742278e-8,-0.25,1,0,0,0,255,1,0.25,-1.125,9.8350625e-8,-0.21650635,1,0,0,0,255,1,0.33333334,-1.2165064,1.0635036e-7,-0.125,1,0,0,0,255,1,0.41666666,-1.239306,-0.1631579,0,1,0,0,0,255,0.020833334,0.5,-1.2165064,1.0635036e-7,0.125,1,0,0,0,255,8.881784e-16,0.5833333,-1.25,1.09278474e-7,0,1,0,0,0,255,8.881784e-16,0.5,-1.2060989,-0.1587861,0.125,1,0,0,0,255,0.020833334,0.5833333,-1.125,9.8350625e-8,0.21650635,1,0,0,0,255,8.881784e-16,0.6666667,-1.1153754,-0.1468421,0.21650635,1,0,0,0,255,0.020833334,0.6666667,-1,8.742278e-8,0.25,1,0,0,0,255,8.881784e-16,0.75,-0.9914448,-0.13052632,0.25,1,0,0,0,255,0.020833334,0.75,-0.875,7.649493e-8,0.21650635,1,0,0,0,255,8.881784e-16,0.8333333,-0.86751425,-0.11421053,0.21650635,1,0,0,0,255,0.020833334,0.8333333,-0.78349364,6.849519e-8,0.125,1,0,0,0,255,8.881784e-16,0.9166667,-0.77679074,-0.10226654,0.125,1,0,0,0,255,0.020833334,0.9166667,-0.75,6.556708e-8,3.061617e-17,1,0,0,0,255,8.881784e-16,1,-0.75,6.556708e-8,3.061617e-17,1,0,0,0,255,8.881784e-16,2.220446e-16,-0.77679074,-0.10226654,-0.125,1,0,0,0,255,0.020833334,0.083333336,-0.78349364,6.849519e-8,-0.125,1,0,0,0,255,8.881784e-16,0.083333336,-0.875,7.649493e-8,-0.21650635,1,0,0,0,255,8.881784e-16,0.16666667,-0.9914448,-0.13052632,-0.25,1,0,0,0,255,0.020833334,0.25,-1,8.742278e-8,-0.25,1,0,0,0,255,8.881784e-16,0.25,-1.1153754,-0.1468421,-0.21650635,1,0,0,0,255,0.020833334,0.33333334,-1.125,9.8350625e-8,-0.21650635,1,0,0,0,255,8.881784e-16,0.33333334,-1.2060989,-0.1587861,-0.125,1,0,0,0,255,0.020833334,0.41666666,-1.2165064,1.0635036e-7,-0.125,1,0,0,0,255,8.881784e-16,0.41666666,-1.175055,-0.31485486,0.125,1,0,0,0,255,0.041666668,0.5833333,-1.0866666,-0.29117128,0.21650635,1,0,0,0,255,0.041666668,0.6666667,-0.9659259,-0.25881892,0.25,1,0,0,0,255,0.041666668,0.75,-0.84518516,-0.22646657,0.21650635,1,0,0,0,255,0.041666668,0.8333333,-0.7567968,-0.20278297,0.125,1,0,0,0,255,0.041666668,0.9166667,-0.7435836,-0.09789474,3.061617e-17,1,0,0,0,255,0.020833334,1,-0.7244444,-0.1941142,3.061617e-17,1,0,0,0,255,0.041666668,2.220446e-16,-0.7435836,-0.09789474,3.061617e-17,1,0,0,0,255,0.020833334,2.220446e-16,-0.7567968,-0.20278297,-0.125,1,0,0,0,255,0.041666668,0.083333336,-0.86751425,-0.11421053,-0.21650635,1,0,0,0,255,0.020833334,0.16666667,-0.84518516,-0.22646657,-0.21650635,1,0,0,0,255,0.041666668,0.16666667,-0.9659259,-0.25881892,-0.25,1,0,0,0,255,0.041666668,0.25,-1.0866666,-0.29117128,-0.21650635,1,0,0,0,255,0.041666668,0.33333334,-1.2074074,-0.32352364,0,1,0,0,0,255,0.041666668,0.5,-1.1548496,-0.47835383,0,1,0,0,0,255,0.0625,0.5,-1.1239055,-0.4655364,0.125,1,0,0,0,255,0.0625,0.5833333,-0.9238797,-0.38268307,0.25,1,0,0,0,255,0.0625,0.75,-0.80839473,-0.3348477,0.21650635,1,0,0,0,255,0.0625,0.8333333,-0.7238538,-0.29982975,0.125,1,0,0,0,255,0.0625,0.9166667,-0.7244444,-0.1941142,3.061617e-17,1,0,0,0,255,0.041666668,1,-0.6929098,-0.2870123,3.061617e-17,1,0,0,0,255,0.0625,2.220446e-16,-0.80839473,-0.3348477,-0.21650635,1,0,0,0,255,0.0625,0.16666667,-0.9238797,-0.38268307,-0.25,1,0,0,0,255,0.0625,0.25,-1.1239055,-0.4655364,-0.125,1,0,0,0,255,0.0625,0.41666666,-1.175055,-0.31485486,-0.125,1,0,0,0,255,0.041666668,0.41666666,-1.0825319,-0.62499976,0,1,0,0,0,255,0.083333336,0.5,-1.0535256,-0.60825294,0.125,1,0,0,0,255,0.083333336,0.5833333,-1.0393647,-0.43051845,0.21650635,1,0,0,0,255,0.0625,0.6666667,-0.9742787,-0.5624998,0.21650635,1,0,0,0,255,0.083333336,0.6666667,-0.8660255,-0.49999982,0.25,1,0,0,0,255,0.083333336,0.75,-0.7577723,-0.43749985,0.21650635,1,0,0,0,255,0.083333336,0.8333333,-0.64951915,-0.37499988,3.061617e-17,1,0,0,0,255,0.083333336,1,-0.6929098,-0.2870123,3.061617e-17,1,0,0,0,255,0.0625,1,-0.64951915,-0.37499988,3.061617e-17,1,0,0,0,255,0.083333336,2.220446e-16,-0.7238538,-0.29982975,-0.125,1,0,0,0,255,0.0625,0.083333336,-0.67852545,-0.39174667,-0.125,1,0,0,0,255,0.083333336,0.083333336,-0.7577723,-0.43749985,-0.21650635,1,0,0,0,255,0.083333336,0.16666667,-0.9742787,-0.5624998,-0.21650635,1,0,0,0,255,0.083333336,0.33333334,-1.0393647,-0.43051845,-0.21650635,1,0,0,0,255,0.0625,0.33333334,-1.0535256,-0.60825294,-0.125,1,0,0,0,255,0.083333336,0.41666666,-0.99169165,-0.76095176,0,1,0,0,0,255,0.104166664,0.5,-0.96511936,-0.74056214,0.125,1,0,0,0,255,0.104166664,0.5833333,-0.89252245,-0.6848566,0.21650635,1,0,0,0,255,0.104166664,0.6666667,-0.6941842,-0.53266627,0.21650635,1,0,0,0,255,0.104166664,0.8333333,-0.67852545,-0.39174667,0.125,1,0,0,0,255,0.083333336,0.9166667,-0.6215873,-0.47696072,0.125,1,0,0,0,255,0.104166664,0.9166667,-0.595015,-0.45657107,3.061617e-17,1,0,0,0,255,0.104166664,2.220446e-16,-0.6941842,-0.53266627,-0.21650635,1,0,0,0,255,0.104166664,0.16666667,-0.8660255,-0.49999982,-0.25,1,0,0,0,255,0.083333336,0.25,-0.7933533,-0.6087614,-0.25,1,0,0,0,255,0.104166664,0.25,-0.96511936,-0.74056214,-0.125,1,0,0,0,255,0.104166664,0.41666666,-0.8838837,-0.88388324,0,1,0,0,0,255,0.125,0.5,-0.79549533,-0.7954949,0.21650635,1,0,0,0,255,0.125,0.6666667,-0.7933533,-0.6087614,0.25,1,0,0,0,255,0.104166664,0.75,-0.70710695,-0.7071066,0.25,1,0,0,0,255,0.125,0.75,-0.61871856,-0.61871827,0.21650635,1,0,0,0,255,0.125,0.8333333,-0.5540138,-0.5540135,0.125,1,0,0,0,255,0.125,0.9166667,-0.595015,-0.45657107,3.061617e-17,1,0,0,0,255,0.104166664,1,-0.5303302,-0.53032994,3.061617e-17,1,0,0,0,255,0.125,2.220446e-16,-0.6215873,-0.47696072,-0.125,1,0,0,0,255,0.104166664,0.083333336,-0.5540138,-0.5540135,-0.125,1,0,0,0,255,0.125,0.083333336,-0.70710695,-0.7071066,-0.25,1,0,0,0,255,0.125,0.25,-0.89252245,-0.6848566,-0.21650635,1,0,0,0,255,0.104166664,0.33333334,-0.79549533,-0.7954949,-0.21650635,1,0,0,0,255,0.125,0.33333334,-0.8602001,-0.8601997,-0.125,1,0,0,0,255,0.125,0.41666666,-0.7405627,-0.965119,0.125,1,0,0,0,255,0.14583333,0.5833333,-0.8602001,-0.8601997,0.125,1,0,0,0,255,0.125,0.5833333,-0.6848571,-0.89252216,0.21650635,1,0,0,0,255,0.14583333,0.6666667,-0.5326666,-0.6941839,0.21650635,1,0,0,0,255,0.14583333,0.8333333,-0.47696105,-0.62158704,0.125,1,0,0,0,255,0.14583333,0.9166667,-0.5303302,-0.53032994,3.061617e-17,1,0,0,0,255,0.125,1,-0.4565714,-0.59501475,3.061617e-17,1,0,0,0,255,0.14583333,2.220446e-16,-0.47696105,-0.62158704,-0.125,1,0,0,0,255,0.14583333,0.083333336,-0.61871856,-0.61871827,-0.21650635,1,0,0,0,255,0.125,0.16666667,-0.5326666,-0.6941839,-0.21650635,1,0,0,0,255,0.14583333,0.16666667,-0.60876185,-0.793353,-0.25,1,0,0,0,255,0.14583333,0.25,-0.6848571,-0.89252216,-0.21650635,1,0,0,0,255,0.14583333,0.33333334,-0.7405627,-0.965119,-0.125,1,0,0,0,255,0.14583333,0.41666666,-0.7609523,-0.9916913,0,1,0,0,0,255,0.14583333,0.5,-0.608253,-1.0535256,0.125,1,0,0,0,255,0.16666667,0.5833333,-0.5624998,-0.9742787,0.21650635,1,0,0,0,255,0.16666667,0.6666667,-0.60876185,-0.793353,0.25,1,0,0,0,255,0.14583333,0.75,-0.49999985,-0.8660255,0.25,1,0,0,0,255,0.16666667,0.75,-0.3917467,-0.67852545,0.125,1,0,0,0,255,0.16666667,0.9166667,-0.4565714,-0.59501475,3.061617e-17,1,0,0,0,255,0.14583333,1,-0.37499988,-0.64951915,3.061617e-17,1,0,0,0,255,0.16666667,2.220446e-16,-0.3917467,-0.67852545,-0.125,1,0,0,0,255,0.16666667,0.083333336,-0.43749988,-0.7577723,-0.21650635,1,0,0,0,255,0.16666667,0.16666667,-0.5624998,-0.9742787,-0.21650635,1,0,0,0,255,0.16666667,0.33333334,-0.608253,-1.0535256,-0.125,1,0,0,0,255,0.16666667,0.41666666,-0.4783544,-1.1548494,0,1,0,0,0,255,0.1875,0.5,-0.6249998,-1.0825319,0,1,0,0,0,255,0.16666667,0.5,-0.46553692,-1.1239053,0.125,1,0,0,0,255,0.1875,0.5833333,-0.43051895,-1.0393645,0.21650635,1,0,0,0,255,0.1875,0.6666667,-0.38268352,-0.9238795,0.25,1,0,0,0,255,0.1875,0.75,-0.43749988,-0.7577723,0.21650635,1,0,0,0,255,0.16666667,0.8333333,-0.33484808,-0.80839455,0.21650635,1,0,0,0,255,0.1875,0.8333333,-0.2998301,-0.7238537,0.125,1,0,0,0,255,0.1875,0.9166667,-0.37499988,-0.64951915,3.061617e-17,1,0,0,0,255,0.16666667,1,-0.28701264,-0.6929096,3.061617e-17,1,0,0,0,255,0.1875,2.220446e-16,-0.2998301,-0.7238537,-0.125,1,0,0,0,255,0.1875,0.083333336,-0.38268352,-0.9238795,-0.25,1,0,0,0,255,0.1875,0.25,-0.49999985,-0.8660255,-0.25,1,0,0,0,255,0.16666667,0.25,-0.46553692,-1.1239053,-0.125,1,0,0,0,255,0.1875,0.41666666,-0.3235242,-1.2074072,0,1,0,0,0,255,0.20833333,0.5,-0.31485543,-1.1750548,0.125,1,0,0,0,255,0.20833333,0.5833333,-0.2911718,-1.0866665,0.21650635,1,0,0,0,255,0.20833333,0.6666667,-0.25881937,-0.96592575,0.25,1,0,0,0,255,0.20833333,0.75,-0.20278333,-0.75679666,0.125,1,0,0,0,255,0.20833333,0.9166667,-0.28701264,-0.6929096,3.061617e-17,1,0,0,0,255,0.1875,1,-0.19411454,-0.7244443,3.061617e-17,1,0,0,0,255,0.20833333,2.220446e-16,-0.20278333,-0.75679666,-0.125,1,0,0,0,255,0.20833333,0.083333336,-0.33484808,-0.80839455,-0.21650635,1,0,0,0,255,0.1875,0.16666667,-0.22646695,-0.84518504,-0.21650635,1,0,0,0,255,0.20833333,0.16666667,-0.25881937,-0.96592575,-0.25,1,0,0,0,255,0.20833333,0.25,-0.43051895,-1.0393645,-0.21650635,1,0,0,0,255,0.1875,0.33333334,-0.31485543,-1.1750548,-0.125,1,0,0,0,255,0.20833333,0.41666666,-0.16315849,-1.239306,0,1,0,0,0,255,0.22916667,0.5,-0.14684264,-1.1153754,0.21650635,1,0,0,0,255,0.22916667,0.6666667,-0.1305268,-0.99144477,0.25,1,0,0,0,255,0.22916667,0.75,-0.22646695,-0.84518504,0.21650635,1,0,0,0,255,0.20833333,0.8333333,-0.102266915,-0.7767907,0.125,1,0,0,0,255,0.22916667,0.9166667,-0.19411454,-0.7244443,3.061617e-17,1,0,0,0,255,0.20833333,1,-0.0978951,-0.74358356,3.061617e-17,1,0,0,0,255,0.22916667,2.220446e-16,-0.102266915,-0.7767907,-0.125,1,0,0,0,255,0.22916667,0.083333336,-0.1305268,-0.99144477,-0.25,1,0,0,0,255,0.22916667,0.25,-0.2911718,-1.0866665,-0.21650635,1,0,0,0,255,0.20833333,0.33333334,-0.14684264,-1.1153754,-0.21650635,1,0,0,0,255,0.22916667,0.33333334,-0.15878668,-1.2060989,-0.125,1,0,0,0,255,0.22916667,0.41666666,9.4372375e-8,-1.25,0,1,0,0,0,255,0.25,0.5,-0.15878668,-1.2060989,0.125,1,0,0,0,255,0.22916667,0.5833333,9.1843674e-8,-1.2165064,0.125,1,0,0,0,255,0.25,0.5833333,7.54979e-8,-1,0.25,1,0,0,0,255,0.25,0.75,6.6060664e-8,-0.875,0.21650635,1,0,0,0,255,0.25,0.8333333,-0.11421095,-0.8675142,0.21650635,1,0,0,0,255,0.22916667,0.8333333,5.6623428e-8,-0.75,3.061617e-17,1,0,0,0,255,0.25,1,-0.0978951,-0.74358356,3.061617e-17,1,0,0,0,255,0.22916667,1,5.6623428e-8,-0.75,3.061617e-17,1,0,0,0,255,0.25,2.220446e-16,5.9152125e-8,-0.78349364,-0.125,1,0,0,0,255,0.25,0.083333336,-0.11421095,-0.8675142,-0.21650635,1,0,0,0,255,0.22916667,0.16666667,6.6060664e-8,-0.875,-0.21650635,1,0,0,0,255,0.25,0.16666667,7.54979e-8,-1,-0.25,1,0,0,0,255,0.25,0.25,8.493514e-8,-1.125,-0.21650635,1,0,0,0,255,0.25,0.33333334,9.1843674e-8,-1.2165064,-0.125,1,0,0,0,255,0.25,0.41666666,0.15878572,-1.206099,0.125,1,0,0,0,255,0.27083334,0.5833333,8.493514e-8,-1.125,0.21650635,1,0,0,0,255,0.25,0.6666667,0.14684176,-1.1153755,0.21650635,1,0,0,0,255,0.27083334,0.6666667,0.130526,-0.9914449,0.25,1,0,0,0,255,0.27083334,0.75,0.114210255,-0.86751425,0.21650635,1,0,0,0,255,0.27083334,0.8333333,5.9152125e-8,-0.78349364,0.125,1,0,0,0,255,0.25,0.9166667,0.1022663,-0.77679074,0.125,1,0,0,0,255,0.27083334,0.9166667,0.097894505,-0.7435837,3.061617e-17,1,0,0,0,255,0.27083334,2.220446e-16,0.114210255,-0.86751425,-0.21650635,1,0,0,0,255,0.27083334,0.16666667,0.130526,-0.9914449,-0.25,1,0,0,0,255,0.27083334,0.25,0.14684176,-1.1153755,-0.21650635,1,0,0,0,255,0.27083334,0.33333334,0.15878572,-1.206099,-0.125,1,0,0,0,255,0.27083334,0.41666666,0.32352325,-1.2074075,0,1,0,0,0,255,0.29166666,0.5,0.16315751,-1.2393061,0,1,0,0,0,255,0.27083334,0.5,0.31485447,-1.175055,0.125,1,0,0,0,255,0.29166666,0.5833333,0.29117092,-1.0866667,0.21650635,1,0,0,0,255,0.29166666,0.6666667,0.2588186,-0.96592593,0.25,1,0,0,0,255,0.29166666,0.75,0.22646627,-0.84518516,0.21650635,1,0,0,0,255,0.29166666,0.8333333,0.19411394,-0.72444445,3.061617e-17,1,0,0,0,255,0.29166666,1,0.097894505,-0.7435837,3.061617e-17,1,0,0,0,255,0.27083334,1,0.19411394,-0.72444445,3.061617e-17,1,0,0,0,255,0.29166666,2.220446e-16,0.1022663,-0.77679074,-0.125,1,0,0,0,255,0.27083334,0.083333336,0.20278272,-0.75679684,-0.125,1,0,0,0,255,0.29166666,0.083333336,0.2588186,-0.96592593,-0.25,1,0,0,0,255,0.29166666,0.25,0.29117092,-1.0866667,-0.21650635,1,0,0,0,255,0.29166666,0.33333334,0.31485447,-1.175055,-0.125,1,0,0,0,255,0.29166666,0.41666666,0.47835457,-1.1548493,0,1,0,0,0,255,0.3125,0.5,0.4655371,-1.1239052,0.125,1,0,0,0,255,0.3125,0.5833333,0.43051913,-1.0393643,0.21650635,1,0,0,0,255,0.3125,0.6666667,0.38268366,-0.92387944,0.25,1,0,0,0,255,0.3125,0.75,0.3348482,-0.8083945,0.21650635,1,0,0,0,255,0.3125,0.8333333,0.20278272,-0.75679684,0.125,1,0,0,0,255,0.29166666,0.9166667,0.29983023,-0.72385365,0.125,1,0,0,0,255,0.3125,0.9166667,0.28701276,-0.6929096,3.061617e-17,1,0,0,0,255,0.3125,2.220446e-16,0.29983023,-0.72385365,-0.125,1,0,0,0,255,0.3125,0.083333336,0.22646627,-0.84518516,-0.21650635,1,0,0,0,255,0.29166666,0.16666667,0.3348482,-0.8083945,-0.21650635,1,0,0,0,255,0.3125,0.16666667,0.43051913,-1.0393643,-0.21650635,1,0,0,0,255,0.3125,0.33333334,0.4655371,-1.1239052,-0.125,1,0,0,0,255,0.3125,0.41666666,0.62499994,-1.0825318,0,1,0,0,0,255,0.33333334,0.5,0.6082531,-1.0535254,0.125,1,0,0,0,255,0.33333334,0.5833333,0.49999997,-0.86602545,0.25,1,0,0,0,255,0.33333334,0.75,0.43749997,-0.75777227,0.21650635,1,0,0,0,255,0.33333334,0.8333333,0.3917468,-0.67852545,0.125,1,0,0,0,255,0.33333334,0.9166667,0.28701276,-0.6929096,3.061617e-17,1,0,0,0,255,0.3125,1,0.37499997,-0.6495191,3.061617e-17,1,0,0,0,255,0.33333334,2.220446e-16,0.3917468,-0.67852545,-0.125,1,0,0,0,255,0.33333334,0.083333336,0.43749997,-0.75777227,-0.21650635,1,0,0,0,255,0.33333334,0.16666667,0.38268366,-0.92387944,-0.25,1,0,0,0,255,0.3125,0.25,0.49999997,-0.86602545,-0.25,1,0,0,0,255,0.33333334,0.25,0.56249994,-0.9742786,-0.21650635,1,0,0,0,255,0.33333334,0.33333334,0.74056184,-0.9651196,0.125,1,0,0,0,255,0.35416666,0.5833333,0.56249994,-0.9742786,0.21650635,1,0,0,0,255,0.33333334,0.6666667,0.68485636,-0.8925227,0.21650635,1,0,0,0,255,0.35416666,0.6666667,0.6087612,-0.7933535,0.25,1,0,0,0,255,0.35416666,0.75,0.532666,-0.6941843,0.21650635,1,0,0,0,255,0.35416666,0.8333333,0.4769605,-0.6215874,0.125,1,0,0,0,255,0.35416666,0.9166667,0.37499997,-0.6495191,3.061617e-17,1,0,0,0,255,0.33333334,1,0.4565709,-0.5950151,3.061617e-17,1,0,0,0,255,0.35416666,2.220446e-16,0.4769605,-0.6215874,-0.125,1,0,0,0,255,0.35416666,0.083333336,0.532666,-0.6941843,-0.21650635,1,0,0,0,255,0.35416666,0.16666667,0.6087612,-0.7933535,-0.25,1,0,0,0,255,0.35416666,0.25,0.74056184,-0.9651196,-0.125,1,0,0,0,255,0.35416666,0.41666666,0.6082531,-1.0535254,-0.125,1,0,0,0,255,0.33333334,0.41666666,0.7609515,-0.9916919,0,1,0,0,0,255,0.35416666,0.5,0.86019945,-0.8602004,0.125,1,0,0,0,255,0.375,0.5833333,0.7071064,-0.7071072,0.25,1,0,0,0,255,0.375,0.75,0.6187181,-0.6187188,0.21650635,1,0,0,0,255,0.375,0.8333333,0.5540134,-0.55401397,0.125,1,0,0,0,255,0.375,0.9166667,0.4565709,-0.5950151,3.061617e-17,1,0,0,0,255,0.35416666,1,0.5303298,-0.5303304,3.061617e-17,1,0,0,0,255,0.375,2.220446e-16,0.5540134,-0.55401397,-0.125,1,0,0,0,255,0.375,0.083333336,0.6187181,-0.6187188,-0.21650635,1,0,0,0,255,0.375,0.16666667,0.7071064,-0.7071072,-0.25,1,0,0,0,255,0.375,0.25,0.68485636,-0.8925227,-0.21650635,1,0,0,0,255,0.35416666,0.33333334,0.86019945,-0.8602004,-0.125,1,0,0,0,255,0.375,0.41666666,0.883883,-0.88388395,0,1,0,0,0,255,0.375,0.5,0.9651195,-0.740562,0.125,1,0,0,0,255,0.39583334,0.5833333,0.79549474,-0.79549557,0.21650635,1,0,0,0,255,0.375,0.6666667,0.79335344,-0.6087613,0.25,1,0,0,0,255,0.39583334,0.75,0.69418424,-0.53266615,0.21650635,1,0,0,0,255,0.39583334,0.8333333,0.6215874,-0.4769606,0.125,1,0,0,0,255,0.39583334,0.9166667,0.5303298,-0.5303304,3.061617e-17,1,0,0,0,255,0.375,1,0.59501505,-0.45657098,3.061617e-17,1,0,0,0,255,0.39583334,2.220446e-16,0.69418424,-0.53266615,-0.21650635,1,0,0,0,255,0.39583334,0.16666667,0.79335344,-0.6087613,-0.25,1,0,0,0,255,0.39583334,0.25,0.79549474,-0.79549557,-0.21650635,1,0,0,0,255,0.375,0.33333334,0.89252263,-0.6848565,-0.21650635,1,0,0,0,255,0.39583334,0.33333334,0.9651195,-0.740562,-0.125,1,0,0,0,255,0.39583334,0.41666666,1.0825317,-0.6250001,0,1,0,0,0,255,0.41666666,0.5,0.9916918,-0.76095164,0,1,0,0,0,255,0.39583334,0.5,1.0535253,-0.6082533,0.125,1,0,0,0,255,0.41666666,0.5833333,0.89252263,-0.6848565,0.21650635,1,0,0,0,255,0.39583334,0.6666667,0.9742785,-0.5625001,0.21650635,1,0,0,0,255,0.41666666,0.6666667,0.8660253,-0.5000001,0.25,1,0,0,0,255,0.41666666,0.75,0.75777215,-0.43750012,0.21650635,1,0,0,0,255,0.41666666,0.8333333,0.6785253,-0.3917469,0.125,1,0,0,0,255,0.41666666,0.9166667,0.59501505,-0.45657098,3.061617e-17,1,0,0,0,255,0.39583334,1,0.64951897,-0.3750001,3.061617e-17,1,0,0,0,255,0.41666666,2.220446e-16,0.6215874,-0.4769606,-0.125,1,0,0,0,255,0.39583334,0.083333336,0.75777215,-0.43750012,-0.21650635,1,0,0,0,255,0.41666666,0.16666667,0.8660253,-0.5000001,-0.25,1,0,0,0,255,0.41666666,0.25,1.0535253,-0.6082533,-0.125,1,0,0,0,255,0.41666666,0.41666666,1.1548493,-0.47835475,0,1,0,0,0,255,0.4375,0.5,1.1239052,-0.46553728,0.125,1,0,0,0,255,0.4375,0.5833333,0.9238794,-0.3826838,0.25,1,0,0,0,255,0.4375,0.75,0.80839443,-0.33484834,0.21650635,1,0,0,0,255,0.4375,0.8333333,0.72385365,-0.29983035,0.125,1,0,0,0,255,0.4375,0.9166667,0.64951897,-0.3750001,3.061617e-17,1,0,0,0,255,0.41666666,1,0.69290954,-0.28701288,3.061617e-17,1,0,0,0,255,0.4375,2.220446e-16,0.6785253,-0.3917469,-0.125,1,0,0,0,255,0.41666666,0.083333336,0.72385365,-0.29983035,-0.125,1,0,0,0,255,0.4375,0.083333336,0.80839443,-0.33484834,-0.21650635,1,0,0,0,255,0.4375,0.16666667,0.9238794,-0.3826838,-0.25,1,0,0,0,255,0.4375,0.25,0.9742785,-0.5625001,-0.21650635,1,0,0,0,255,0.41666666,0.33333334,1.0393643,-0.43051928,-0.21650635,1,0,0,0,255,0.4375,0.33333334,1.1239052,-0.46553728,-0.125,1,0,0,0,255,0.4375,0.41666666,1.2074074,-0.32352346,0,1,0,0,0,255,0.45833334,0.5,1.175055,-0.31485468,0.125,1,0,0,0,255,0.45833334,0.5833333,1.0393643,-0.43051928,0.21650635,1,0,0,0,255,0.4375,0.6666667,1.0866666,-0.29117113,0.21650635,1,0,0,0,255,0.45833334,0.6666667,0.9659259,-0.25881878,0.25,1,0,0,0,255,0.45833334,0.75,0.84518516,-0.22646643,0.21650635,1,0,0,0,255,0.45833334,0.8333333,0.7567968,-0.20278287,0.125,1,0,0,0,255,0.45833334,0.9166667,0.69290954,-0.28701288,3.061617e-17,1,0,0,0,255,0.4375,1,0.7244444,-0.19411409,3.061617e-17,1,0,0,0,255,0.45833334,2.220446e-16,0.84518516,-0.22646643,-0.21650635,1,0,0,0,255,0.45833334,0.16666667,0.9659259,-0.25881878,-0.25,1,0,0,0,255,0.45833334,0.25,1.0866666,-0.29117113,-0.21650635,1,0,0,0,255,0.45833334,0.33333334,1.175055,-0.31485468,-0.125,1,0,0,0,255,0.45833334,0.41666666,1.206099,-0.15878591,0.125,1,0,0,0,255,0.47916666,0.5833333,1.1153755,-0.14684194,0.21650635,1,0,0,0,255,0.47916666,0.6666667,0.9914449,-0.13052617,0.25,1,0,0,0,255,0.47916666,0.75,0.86751425,-0.1142104,0.21650635,1,0,0,0,255,0.47916666,0.8333333,0.7435837,-0.097894624,3.061617e-17,1,0,0,0,255,0.47916666,1,0.7244444,-0.19411409,3.061617e-17,1,0,0,0,255,0.45833334,1,0.7435837,-0.097894624,3.061617e-17,1,0,0,0,255,0.47916666,2.220446e-16,0.7567968,-0.20278287,-0.125,1,0,0,0,255,0.45833334,0.083333336,0.77679074,-0.10226642,-0.125,1,0,0,0,255,0.47916666,0.083333336,0.9914449,-0.13052617,-0.25,1,0,0,0,255,0.47916666,0.25,1.1153755,-0.14684194,-0.21650635,1,0,0,0,255,0.47916666,0.33333334,1.206099,-0.15878591,-0.125,1,0,0,0,255,0.47916666,0.41666666,1.2393061,-0.16315772,0,1,0,0,0,255,0.47916666,0.5,0.77679074,-0.10226642,0.125,1,0,0,0,255,0.47916666,0.9166667,0.86751425,-0.1142104,-0.21650635,1,0,0,0,255,0.47916666,0.16666667,-1.25,1.09278474e-7,0,1,0,0,0,255,1,0.5,-0.75,6.556708e-8,3.061617e-17,1,0,0,0,255,1,1,-0.78349364,6.849519e-8,-0.125,1,0,0,0,255,1,0.083333336]);

export default new Mesh({ 
  mesh, 
  positionSize: 4, 
  colorSize: 4, 
  uvSize: 2,
  vertexCount: 637,
  stride: 10,
  name: "src/meshes/torus.ply"
});

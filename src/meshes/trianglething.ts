
import { Mesh } from "../renderer/mesh";

// prettier-ignore
const positions = new Float32Array([0,2.609,0,-0.368004,2.9959495,0.50652,-0.595448,2.9959495,-0.19346951,0,2.609,0,0.368004,2.9959495,0.50652,0,2.609,0,-0.595448,2.9959495,-0.19346951,0,2.9959495,-0.6260975,0,2.609,0,0.595448,2.9959495,-0.19346951,0,2.609,0,0,3.6220505,0.6260975,-0.595448,3.6220505,0.19346951,-0.368004,3.6220505,-0.50652,0.368004,3.6220505,-0.50652,0.595448,3.6220505,0.19346951,-0.368004,3.6220505,-0.50652,0,4.0090003,0,0,4.0090003,0,0,4.0090003,0,0,4.0090003,0,0,4.0090003,0,1,0,0,0,2.5,0,-4.3711392e-8,0,1,-1,0,-8.7422784e-8,-4.3711392e-8,0,1,1.19248815e-8,0,-1,1,0,0,1.19248815e-8,0,-1,-1,0,-8.7422784e-8]);

// prettier-ignore
const colors = new Uint8Array([0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255,0,1,255,255]);

// prettier-ignore
const uvs = new Float32Array([0.00013659838,0.8180941,0.15755458,0.7272099,0.1575546,0.9089782,0.00013659043,0.6363257,0.15755458,0.54544157,0.0001365666,0.09102075,0.15755455,0.00013656964,0.15755457,0.18190491,0.00013657454,0.2727891,0.15755457,0.36367324,0.00013658249,0.45455742,0.31497157,0.6363257,0.31497157,0.8180941,0.31497154,0.09102073,0.31497154,0.27278906,0.31497154,0.45455742,0.31497157,0.9998634,0.47238955,0.72720987,0.47238958,0.9089782,0.47238955,0.1819049,0.47238955,0.36367324,0.47238955,0.54544157,0.8119813,0.33945516,0.642322,0.16979587,0.8119813,0.00013659486,0.47266275,0.00013660162,0.81198126,0.6790469,0.47266275,0.33972836,0.47266272,0.6790469,0.47266275,0.33945513,0.81198126,0.3397284]);

    
// prettier-ignore
const normals = new Float32Array([0,-1,8.3803394e-7,-0.5257306,-0.44721383,0.723607,-0.8506533,-0.44721213,-0.2763879,0,-1,8.3803394e-7,0.5257306,-0.4472139,0.723607,0,-1,8.3803394e-7,-0.8506533,-0.44721213,-0.2763879,0,-0.44721153,-0.89442825,0,-1,8.3803394e-7,0.8506533,-0.4472122,-0.27638793,0,-1,8.3803394e-7,0,0.44721153,0.89442825,-0.8506533,0.44721216,0.27638793,-0.5257306,0.4472139,-0.72360694,0.5257306,0.4472139,-0.72360694,0.85065323,0.4472122,0.2763879,-0.5257306,0.4472139,-0.72360694,0,1,-8.165459e-7,0,1,-8.165459e-7,0,1,-8.165459e-7,0,1,-8.165459e-7,0,1,-8.165459e-7,0.8999471,-0.43599886,2.4163015e-7,-5.150958e-8,1,0,-3.0203772e-8,-0.4359989,0.8999472,-0.8999471,-0.4359989,-2.4291313e-7,-3.0203772e-8,-0.4359989,0.8999472,0,-0.43599886,-0.8999471,0.8999471,-0.43599886,2.4163015e-7,0,-0.43599886,-0.8999471,-0.8999471,-0.4359989,-2.4291313e-7]);
    
// prettier-ignore
const faces = new Uint32Array([0,1,2,1,3,4,5,6,7,8,7,9,10,9,4,1,4,11,2,1,12,7,6,13,9,7,14,4,9,15,1,11,12,2,12,16,7,13,14,9,14,15,4,15,11,12,11,17,16,12,18,14,13,19,15,14,20,11,15,21,22,23,24,24,23,25,26,27,28,25,23,29,29,23,22,26,30,27]);

export default new Mesh({
  colors,
  faces,
  name: "src/meshes/trianglething.ply",
  normals,
  positions,
  uvs,
  vertexCount: 31
});
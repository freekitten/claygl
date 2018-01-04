export default "@export clay.prez.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\n@import clay.chunk.skinning_header\nvoid main()\n{\n    vec3 skinnedPosition = position;\n#ifdef SKINNING\n    @import clay.chunk.skin_matrix\n    skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n    gl_Position = worldViewProjection * vec4(skinnedPosition, 1.0);\n}\n@end\n@export clay.prez.fragment\nvoid main()\n{\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n@end";

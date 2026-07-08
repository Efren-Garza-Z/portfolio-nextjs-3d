import { Mesh, MeshStandardMaterial, Color, BoxGeometry } from 'three';

export class Cube extends Mesh {
	constructor(size) {
		super();

		this.geometry = new BoxGeometry(size, size, size);
		this.material = new MeshStandardMaterial({
			flatShading: true,
			roughness: .5
		});
	}
}

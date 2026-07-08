import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
class BoxCreator extends Mesh {
	constructor( {width, height, alt = 40, color} ) {
		super();

		this.geometry = new BoxGeometry(width, alt, height);
		this.material = new MeshStandardMaterial({
			color,
			flatShading: true,
			roughness: .15
		});

		// Variables propias
		this.color = color;
		this.dimension = {width, height}

	}
}

export default BoxCreator;

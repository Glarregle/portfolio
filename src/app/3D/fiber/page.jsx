import FiberModelScene from "../../../components/FiberModelScene.jsx";

function page() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <FiberModelScene modelPath="/models/human_dna/scene.gltf" />
    </div>
  );
}

export default page;
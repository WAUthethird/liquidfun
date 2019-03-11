function TestNoFunHere() {
  camera.position.y = 3;
  camera.position.z = 6;
 
  var bd = new b2BodyDef();
  var ground = world.CreateBody(bd);
  
  var shape1 = new b2PolygonShape();
  var vertices = shape1.vertices;
  vertices.push(new b2Vec2(-4, -1));
  vertices.push(new b2Vec2(4, -1));
  vertices.push(new b2Vec2(4, 0));
  vertices.push(new b2Vec2(-4, 0));
  ground.CreateFixtureFromShape(shape1, 0);

  var shape2 = new b2PolygonShape();
  var vertices = shape2.vertices;
  vertices.push(new b2Vec2(-4, -0.1));
  vertices.push(new b2Vec2(-2, -0.1));
  vertices.push(new b2Vec2(-2, 2));
  vertices.push(new b2Vec2(-4, 2));
  ground.CreateFixtureFromShape(shape2, 0);

  var shape3 = new b2PolygonShape();
  var vertices = shape3.vertices;
  vertices.push(new b2Vec2(2, -0.1));
  vertices.push(new b2Vec2(4, -0.1));
  vertices.push(new b2Vec2(4, 2));
  vertices.push(new b2Vec2(2, 2));
  ground.CreateFixtureFromShape(shape3, 0);

  var psd = new b2ParticleSystemDef();
  psd.radius = 0.035;
  var particleSystem = world.CreateParticleSystem(psd);
  
  var box = new b2PolygonShape();
  var pgd = new b2ParticleGroupDef();
  box.SetAsBoxXY(2, 1);
  pgd.flags = b2_elasticParticle;
  pgd.groupFlags = b2_solidParticleGroup;
  pgd.position.Set(1, 4);
  pgd.angle = -0.5;
  pgd.angularVelocity = 2;
  pgd.shape = box;
  pgd.color.Set(0, 0, 255, 255);
  particleSystem.CreateParticleGroup(pgd);
}

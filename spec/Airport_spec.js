describe("Airport", function(){
  var airport

  beforeEach(function() {
    airport = new Airport();
  });

  it("Exists", function() {
    expect(airport).toBeDefined();
  });

  it("Starts with an empty array of planes", function() {
    expect(airport.hangar).toEqual([])
  });

  it("Can land a plane", function() {
    airport.land('plane')
    expect(airport.hangar).toEqual(['plane'])
  });

  it("Can tell a plane to take off", function(){
    airport.land('plane')
    airport.takeoff('plane')
    expect(airport.hangar).toEqual([])
  });
});

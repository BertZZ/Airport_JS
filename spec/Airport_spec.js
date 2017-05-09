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
});

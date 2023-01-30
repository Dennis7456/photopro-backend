const protected = (req, res) => {
    res.json({ message: "You are authorized to access me" });
  };

  module.exports = {
    protected
  }
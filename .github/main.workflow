workflow "Build and deploy on push" {
  on = "push"
  resolves = ["now"]
}

action "now" {
  uses = "now"
}

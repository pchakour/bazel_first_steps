workspace(
  name = 'standalone',
  managed_directories = {"@npm": ["node_modules"]},
)


load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "b011d6206e4e76696eda8287618a2b6375ff862317847cdbe38f8d0cd206e9ce",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.6.0/rules_nodejs-5.6.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories()

yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

# Example CloudCannon workspace with unique schemas per file

Here we have a directory of files (in `files/`) where each file should have a unique schema.

To do so, we create a schema for each, and reference both schemas in the `cloudcannon.config.*` file.

On each file, we can then specify `_schema: data_one` or `_schema: data_two` to apply the correct schema in CloudCannon.

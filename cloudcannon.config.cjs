module.exports = {
    collections_config: {
        files: {
            path: 'files',
            icon: 'article',
            parser: 'front-matter',
            schemas: {
                data_one: {
                    path: "schemas/data_one.md"
                },
                data_two: {
                    path: "schemas/data_two.md"
                }
            }
        }
    }
}
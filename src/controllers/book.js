import { Book, Author, Category } from "../models";
import * as Yup from "yup";

class BookController {
  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        category_id: Yup.number().required(),
        author_id: Yup.number().required(),
        name: Yup.string().required(),
        cover_url: Yup.string().url(),
        release_date: Yup.date(),
        pages: Yup.number(),
        synopsis: Yup.string(),
        highlighted: Yup.boolean(),
      });

      await schema.validate(req.body);

      const { category_id, author_id } = req.body;

      const categoryExist = await Category.findByPk(category_id);

      if (!categoryExist) {
        return res.status(404).json({ error: "Categoria não encontrada." });
      }

      const authorExist = await Category.findByPk(author_id);

      if (!authorExist) {
        return res.status(404).json({ error: "Autor não encontrado." });
      }

      const createBook = await new Book({
        ...req.body,
      });

      await createBook.save();

      return res.json(createBook);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async getAll(req, res) {
    const { highlighted, category_id } = req.query;

    const where = {};

    if (highlighted) {
      where.highlighted = true;
    }

    if (category_id) {
      where.category_id = Number(category_id);
    }

    try {
      const books = await Book.findAll({
        order: [["name", "ASC"]],
        where,
        include: [
          {
            model: Author,
            as: "author",
            attributes: ["name"],
          },
          {
            model: Category,
            as: "category",
            attributes: ["name"],
          },
        ],
      });

      return res.json(books);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }
}

export default new BookController();

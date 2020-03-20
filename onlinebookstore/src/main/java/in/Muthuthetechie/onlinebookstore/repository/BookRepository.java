package in.Muthuthetechie.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.Muthuthetechie.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}

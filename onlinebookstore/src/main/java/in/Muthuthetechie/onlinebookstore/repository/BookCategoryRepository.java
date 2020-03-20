package in.Muthuthetechie.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import in.Muthuthetechie.onlinebookstore.entity.BookCategory;

/* Before this Repositoryrestresource annotation json response will
 * have default rest endpoints value we are now customising using this annotation
 * collectionresourcerel will be the json response value intially it is BookCategories
 * path would be the url value*/
@RepositoryRestResource(collectionResourceRel="bookCategory", path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}

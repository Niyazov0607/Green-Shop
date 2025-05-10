import Cards from "./Cards/cards";
import Category from "./Category/category";

const HomeProducts = () => {
    return (
        <div className="flex items-center containers">
            <Category />
            <Cards />
        </div>
    );
};

export default HomeProducts;

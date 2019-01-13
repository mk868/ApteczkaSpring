package pb.bas.apteczkaSpring;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pb.bas.apteczkaSpring.entity.Medicine;
import pb.bas.apteczkaSpring.model.MedicineItemDTO;

@SpringBootApplication
public class ApteczkaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApteczkaSpringApplication.class, args);
	}

	private static final String PATH = "/error";

	//TODO move to other class
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();

		Converter<Medicine, MedicineItemDTO> medicineItemConverter = new Converter<Medicine, MedicineItemDTO>() {
			@Override
			public MedicineItemDTO convert(MappingContext<Medicine, MedicineItemDTO> context) {
				Medicine source = context.getSource();
				MedicineItemDTO destination = new MedicineItemDTO();
				destination.setId(source.getId());
				destination.setName(source.getName());
				destination.setCompany(source.getCompany());
				destination.setImage(source.getImage());

				String description = source.getDescription();
				if(description != null) {
					destination.setShortDescription(description.substring(0, Math.min(description.length(), 10)) + " ...");//FIXME move 10 to const/config
				}
				return destination;
			}
		};

		modelMapper.addConverter(medicineItemConverter);
		return modelMapper;
	}
}


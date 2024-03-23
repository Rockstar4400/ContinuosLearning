package modifiersInInterfaces;

public interface Identified {
    default int getId() { return Math.abs(hashCode()); } 
}